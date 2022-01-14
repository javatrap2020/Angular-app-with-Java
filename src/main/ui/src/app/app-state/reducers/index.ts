
// @ts-ignore
import {ActionReducerMap, createSelector, createFeatureSelector, ActionReducer, MetaReducer,} from '@ngrx/store';
// @ts-ignore
import * as fromRouter from '@ngrx/router-store';
import {RouterStateUrl} from '../shared/utils';
import * as fromCreateUser from './createuser';

// @ts-ignore
import{localStorageSync} from 'ngrx-store-localstorage';
import {environment} from "../../../environments/environment";
// @ts-ignore
import {storeFreeze} from 'ngrx-store-freeze';


export interface State {
  createUser: fromCreateUser.State;
  routerReducer: fromRouter.RouterReducerState<RouterStateUrl>;
}

export const reducers: ActionReducerMap<State> = {
  createUser: fromCreateUser.reducer,
  routerReducer: fromRouter.routerReducer,
};

const reducerKeys = ['loggedinuser'];
export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({keys: reducerKeys})(reducer);
}

export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return function (state: State, action: any): State {
    console.log('state', state);
    console.log('action', action);
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<State>[] =
  environment.production ? [localStorageSyncReducer]
    : [logger, storeFreeze, localStorageSyncReducer];

export const getCreateUserState = createFeatureSelector<fromCreateUser.State>('createUser');

export const getUsers = createSelector(
  getCreateUserState,
  fromCreateUser.getUsers
);
