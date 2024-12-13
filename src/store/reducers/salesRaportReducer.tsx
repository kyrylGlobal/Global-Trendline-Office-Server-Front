import { SalesRaportAction, SalesRaportActionTypes, SalesRaportState } from "../../types/salesRaport";

const initialState: SalesRaportState = {
    loading: false,
    error: null,
    resultFile: null
}

export const salesRaportReducer = (state = initialState, action: SalesRaportAction): SalesRaportState => {
    switch (action.type) {
        case SalesRaportActionTypes.FETCH_USER_ACTION:
            return {...state, loading: true, resultFile: null, error: null};
        case SalesRaportActionTypes.FETCH_USER_SUCCESS:
            return {...state, resultFile: action.resultFile, loading: false, error: null};
        case SalesRaportActionTypes.FETCH_USER_ERROR:
            return {...state, loading: false, resultFile: null, error: action.message};
        case SalesRaportActionTypes.CLEAN_STORE:
            return {...state, loading: false, resultFile: null, error: null}
        default:
            return state;
    }
};