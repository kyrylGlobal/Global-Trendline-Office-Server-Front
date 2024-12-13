import axios from "axios";
import { Dispatch } from "react";
import { SetStatisticPostParms, StatisticAction, StatisticActionTypes, StatisticPostParams } from "../../types/bStatistic";

export const setStatisticPostParams = (statisticPostParams: StatisticPostParams): SetStatisticPostParms => (
        {
            type: StatisticActionTypes.SET_STATISTIC_POST_PARAMS,
            body: statisticPostParams
        }
    );

export const getStatisticOrders = (statisticPostParams: StatisticPostParams) => {
    return async (dispatch: Dispatch<StatisticAction>) => {
        let mode = process.env.REACT_APP_MODE?.replace(" ", "");
        const response = await axios.post(`${mode === "production" ? "https://sleepy-savannah-27109.herokuapp.com" : "http://localhost:5000"}/api/baselinker/statistic/get`, statisticPostParams);
        dispatch({type: StatisticActionTypes.SET_STATISTIC, body: response.data});
    }
}

export const sendStatisticToGoogleSheet = async (statistic: any, period: string) => {
    let mode = process.env.REACT_APP_MODE?.replace(" ", "");
    let data = {statistic, period}
        const response = await axios.post(`${mode === "production" ? "https://sleepy-savannah-27109.herokuapp.com" : "http://localhost:5000"}/api/baselinker/statistic/sheet/sent`, data);
        return response.data;
}