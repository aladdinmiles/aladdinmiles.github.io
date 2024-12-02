'use client';
import { useCallback, useEffect, useRef } from 'react';
import { useReducer } from 'react';
import { FetchState } from '../types';
import {
  Action,
  initialState,
  ERROR,
  LOADING,
  reducer,
  SUCCESS
} from './reducer';
import { convertKeysToCamelCase } from '@/utils/convertKeys';
import axios from 'axios';

const fetchData = async (
  endpoint: string,
  dispatch: React.Dispatch<Action<any>>,
  fetchInProgress: React.MutableRefObject<Set<string>>
) => {
  const apiBaseUrl = process.env.API_URL;
  if (!apiBaseUrl) {
    throw new Error('API_URL is not defined in the environment variables.');
  }

  if (fetchInProgress.current.has(endpoint)) return; // Prevent duplicate fetches

  fetchInProgress.current.add(endpoint); // Mark as in-progress
  dispatch({ type: LOADING });

  try {
    const response = await axios.get(`${apiBaseUrl}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.status !== 200) {
      throw {
        message: response.data.detail || response.statusText,
        status: response.status,
        error: response.data
      };
    }

    dispatch({
      type: SUCCESS,
      data: convertKeysToCamelCase(response.data.data || {}),
      success: {
        message: response.data.detail,
        status: response.status,
        data: convertKeysToCamelCase(response.data.data || {})
      }
    });
  } catch (error: any) {
    dispatch({ type: ERROR, error });
  } finally {
    fetchInProgress.current.delete(endpoint); // Remove from in-progress
  }
};

export default function useQuery<T>(endpoint: string): FetchState<T> {
  const [state, dispatch] = useReducer(reducer<T>, initialState(true));
  const fetchInProgress = useRef(new Set<string>()); // Tracks in-progress fetches

  const fetchDataCallback = useCallback(
    (endpoint: string) => fetchData(endpoint, dispatch, fetchInProgress),
    []
  );

  useEffect(() => {
    fetchDataCallback(endpoint);
  }, [endpoint, fetchDataCallback]);

  return state;
}
