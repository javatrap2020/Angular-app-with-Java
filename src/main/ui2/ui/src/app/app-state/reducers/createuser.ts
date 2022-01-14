
import * as createUserActions from '../actions/createUser'
// @ts-ignore
import {Action, createReducer, on} from '@ngrx/store';



export interface State {
  isLoading: boolean;
  isLoadingSuccess: boolean;
  users: any;
}

const initialState: State = {
  isLoading: false,
  isLoadingSuccess: false,
  users: []
};

export const createUserReducer = createReducer(
  initialState,
  on(createUserActions.createUser, (state: any) => ({...state, isLoading: true, isLoadingSuccess: false, login: undefined})),
  on(createUserActions.createUserSuccess, (state: any, user: any) => ({...state, isLoading: false, isLoadingSuccess: true, user})),
  on(createUserActions.createUserFailure, (state: any, user: any) => ({...state,isLoading: false, isLoadingSuccess: true, user}))
);

export function reducer(state: State| undefined, action: Action) {
  return createUserReducer(state, action);
}

export const getUsers = (state: State) => {
  return {
    isLoading: state.isLoading,
    isLoadingSuccess: state.isLoadingSuccess,
    login: state.users
  };
};


