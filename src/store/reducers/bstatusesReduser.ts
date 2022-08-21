import { StatusesAction, StatusesActionTypes, StatusesState } from "../../types/bStatuses"

const initialState: StatusesState = {
    loading: false,
    statuses: [],
    error: null
}


let bStatusesReducer = (state = initialState, action: StatusesAction): StatusesState => {
    switch (action.type) {
        case StatusesActionTypes.START_LOADING:
            return {...state, loading: true}
        case StatusesActionTypes.LOADING_SUCCESS:
            return {...state, loading: false, statuses: action.body}
        case StatusesActionTypes.LOADING_ERROR:
            return {...state, loading: false, error: action.body}
        default:
            return state;
    }
}

export default bStatusesReducer;