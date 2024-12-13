export interface StatusesState {
    loading: boolean,
    statuses: any[],
    error: string | null
}

export enum StatusesActionTypes {
    START_LOADING = "START_LOADING",
    LOADING_SUCCESS = "LOADING_SUCCESS",
    LOADING_ERROR = "LOADING_ERROR"
}


interface FetchStatusesAction {
    type: StatusesActionTypes.START_LOADING,
    body: boolean
}

interface FetchStatusesActionSuccess {
    type: StatusesActionTypes.LOADING_SUCCESS,
    body: any[]
}

interface FetchStatusesActionError {
    type: StatusesActionTypes.LOADING_ERROR,
    body: string
}

export type StatusesAction = FetchStatusesAction | FetchStatusesActionSuccess | FetchStatusesActionError;