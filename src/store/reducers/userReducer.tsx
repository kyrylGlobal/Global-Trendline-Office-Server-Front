import { UserAction, UserActionTypes, UserState } from "../../types/users"

const initialState: UserState = {
    loading: false,
    users: [],
    error: null
}

export const userReducer = (state = initialState, action: UserAction): UserState =>
{
    switch (action.type) {
        case UserActionTypes.FETCH_USER_ACTION:
            return {...state, loading: true, error: null, users: []}
        case UserActionTypes.FETCH_USER_ACTION_SUCCESS:
            return {...state, loading: false, users: action.body, error: null}
        case UserActionTypes.FETCH_USER_ACTION_ERROR:
            return {...state, loading: false, users: [], error: action.body}
        default:
            return state;
    }
}