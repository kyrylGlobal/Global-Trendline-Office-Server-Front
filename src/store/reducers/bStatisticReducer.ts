import { StatisticAction, StatisticActionTypes, StatisticState } from "../../types/bStatistic";

const initialState: StatisticState = {
    statistic: {},
    error: null,
    loading: false,
    statisticPostParams: {
        dateFrom: 0,
        dateTo: 0,
        statuses: []
    }
}

const statisticReducer = (state = initialState, action: StatisticAction): StatisticState => {
    switch (action.type) {
        case StatisticActionTypes.SET_STATISTIC_POST_PARAMS:
            return {...state, statisticPostParams: action.body}
        case StatisticActionTypes.SET_STATISTIC:
            return {...state, statistic: action.body}
        default:
            return state;
    }
}

export default statisticReducer;