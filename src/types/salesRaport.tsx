export interface SalesRaportState {
    loading?: boolean,
    resultFile?: ResultSalesRaportFile | null,
    error?: string | null
}

export type SalesRaportAction = FetchUserAction | FetchUserActionSuccess | FetchUserActionError;

interface FetchUserAction{
    type: SalesRaportActionTypes.FETCH_USER_ACTION
}

interface FetchUserActionSuccess{
    type: SalesRaportActionTypes.FETCH_USER_SUCCESS
    resultFile: ResultSalesRaportFile
}

interface FetchUserActionError{
    type: SalesRaportActionTypes.FETCH_USER_ERROR
    message: string
}

export enum SalesRaportActionTypes{
    FETCH_USER_ACTION="FETCH_USER_ACTION",
    FETCH_USER_SUCCESS="FETCH_USER_SUCCESS",
    FETCH_USER_ERROR="FETCH_USER_ERROR"
}

export interface ResultSalesRaportFile{
    url: string;
    fileName: string;
}