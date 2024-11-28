'use client';

import { useReducer } from 'react';
import axios, { AxiosRequestConfig } from 'axios';
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

type UseMutationProps<T> = {
  endpoint: string;
  method: 'post' | 'put' | 'patch' | 'delete';
  options?: AxiosRequestConfig;
  onSuccess?: (success: FetchState<T>['success']) => void;
  onError?: (error: FetchState<T>['error']) => void;
};

type UseMutationResponse<T> = {
  action: (payload?: Partial<T>) => void;
  state: FetchState<T>;
};

type SendPayloadProps<T> = {
  endpoint: string;
  payload?: Partial<T>;
  method: 'post' | 'put' | 'patch' | 'delete';
  options?: AxiosRequestConfig;
  dispatch: React.Dispatch<Action<T>>;
  onSuccess?: (success: FetchState<T>['success']) => void;
  onError?: (error: FetchState<T>['error']) => void;
};

const sendPayload = async <T>({
  endpoint,
  payload = {},
  method,
  options = {},
  dispatch,
  onSuccess,
  onError
}: SendPayloadProps<T>) => {
  const apiBaseUrl = process.env.API_URL;

  if (!apiBaseUrl) {
    throw new Error('API_URL is not defined in the environment variables.');
  }
  dispatch({ type: LOADING });

  try {
    const response = await axios({
      url: `${apiBaseUrl}${endpoint}`,
      method,
      data: payload,
      ...options
    });

    const isSuccessful =
      [200, 201, 202, 204].includes(response.status) ||
      response.data?.status === 'ok';

    if (!isSuccessful) {
      throw {
        message: response.data?.detail || response.statusText,
        status: response.status,
        error: response.data
      };
    }

    const success = {
      message: response.data?.detail || 'Operation succeeded',
      status: response.status,
      data: convertKeysToCamelCase(response.data?.data)
    };

    dispatch({ type: SUCCESS, success, data: success.data });
    onSuccess?.(success);
  } catch (error: any) {
    console.error('error', error);
    dispatch({ type: ERROR, error });
    onError?.(error);
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

  const action = (payload?: Partial<T>) => {
    sendPayload({
      endpoint,
      payload,
      method,
      options,
      dispatch,
      onSuccess,
      onError
    });
  };

  return { action, state };
}
