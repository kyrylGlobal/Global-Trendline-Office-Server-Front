export interface StatisticPostParams {
    statuses: number[],
    dateFrom: number,
    dateTo: number
}

export interface StatisticState {
    statistic: any,
    statisticPostParams: StatisticPostParams,
    loading: boolean,
    error: string | null
}

export enum StatisticActionTypes {
    SET_STATISTIC_POST_PARAMS = "SET_STATISTIC_POST_PARAMS",
    SET_STATISTIC = "SET_STATISTIC"
}

export interface SetStatisticPostParms {
    type: StatisticActionTypes.SET_STATISTIC_POST_PARAMS,
    body: StatisticPostParams
}

export interface SetStatistic {
    type: StatisticActionTypes.SET_STATISTIC,
    body: any
}

export type StatisticAction = SetStatisticPostParms | SetStatistic;
