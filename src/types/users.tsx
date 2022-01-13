export enum UserActionTypes{
    FETCH_USER_ACTION = "FETCH_USER_ACTION",
    FETCH_USER_ACTION_SUCCESS = "FETCH_USER_ACTION_SUCCESS",
    FETCH_USER_ACTION_ERROR = "FETCH_USER_ACTION_ERROR"
}

interface FetchUserAction{
    type: UserActionTypes.FETCH_USER_ACTION
}

interface FetchUserActionSuccess{
    type: UserActionTypes.FETCH_USER_ACTION_SUCCESS
    body: any[]
}
interface FetchUserActionError{
    type: UserActionTypes.FETCH_USER_ACTION_ERROR
    body: string
}

export type UserAction = FetchUserAction | FetchUserActionSuccess | FetchUserActionError;

export interface UserState {
    users?: any[];
    loading: boolean;
    error: null | string;
}