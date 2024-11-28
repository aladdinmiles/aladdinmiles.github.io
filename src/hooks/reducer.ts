import { FetchState } from '../types';

// Action Types
const LOADING = 'LOADING';
const ERROR = 'ERROR';
const SUCCESS = 'SUCCESS';

type Action<T> =
  | { type: typeof LOADING }
  | { type: typeof ERROR; error: FetchState<T>['error'] }
  | { type: typeof SUCCESS; success: FetchState<T>['success']; data: T };

const reducer = <T>(state: FetchState<T>, action: Action<T>): FetchState<T> => {
  switch (action.type) {
    case LOADING:
      return { ...state, isLoading: true };
    case SUCCESS:
      return {
        ...state,
        isSuccess: true,
        isLoading: false,
        data: action.data,
        success: action.success
      };
    case ERROR:
      return { ...state, isError: true, isLoading: false, error: action.error };
    default:
      return state;
  }
};

const initialState = (isLoading: boolean): FetchState<any> => ({
  isLoading,
  isError: false,
  isSuccess: false,
  error: undefined,
  success: undefined,
  data: undefined
});

export { reducer, initialState, type Action, LOADING, ERROR, SUCCESS };
