'use client';
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
import axios, { AxiosRequestConfig } from 'axios';

type UseMutationProps<T> = {
  endpoint: string;
  method: 'post' | 'put' | 'patch' | 'delete';
  options?: AxiosRequestConfig;
  onSuccess?: (success: FetchState<T>['success']) => void;
  onError?: (error: FetchState<T>['error']) => void;
};

type UseMutationResponse<T> = {
  action: (payload: Partial<T>) => void;
  state: FetchState<T>;
};

type SendPayloadProps<T> = {
  endpoint: string;
  payload: Partial<T>;
  method: 'post' | 'put' | 'patch' | 'delete';
  dispatch: React.Dispatch<Action<any>>;
  options?: AxiosRequestConfig;
  onSuccess?: (success: FetchState<T>['success']) => void;
  onError?: (error: FetchState<T>['error']) => void;
};

const sendPayload = async <T>({
  endpoint,
  payload,
  method,
  dispatch,
  options = {},
  onSuccess,
  onError
}: SendPayloadProps<T>) => {
  const apiBaseUrl = process.env.API_URL;
  if (!apiBaseUrl) {
    throw new Error('API_URL is not defined in the environment variables.');
  }
  dispatch({ type: LOADING });

  try {
    const response = await axios.post(
      `${apiBaseUrl}${endpoint}`,
      payload,
      options
    );

    if (response.status !== 200 || 201) {
      throw {
        message: response.data.detail || response.statusText,
        status: response.status,
        error: response.data
      };
    }

    const success = {
      message: response.data.detail,
      status: response.status,
      data: convertKeysToCamelCase(response.data.data)
    };

    dispatch({
      type: SUCCESS,
      success,
      data: convertKeysToCamelCase(response.data.data)
    });
    if (typeof onSuccess === 'function') {
      onSuccess(success);
    }
  } catch (error: any) {
    dispatch({ type: ERROR, error });
    if (typeof onError === 'function') {
      onError(error);
    }
  }
};

export default function useMutation<T>({
  endpoint,
  method,
  options,
  onSuccess,
  onError
}: UseMutationProps<T>): UseMutationResponse<T> {
  const [state, dispatch] = useReducer(reducer<T>, initialState(false));

  return {
    action: (payload: Partial<T>) =>
      sendPayload({
        endpoint,
        payload,
        method,
        options,
        dispatch,
        onSuccess,
        onError
      }),
    state
  };
}
