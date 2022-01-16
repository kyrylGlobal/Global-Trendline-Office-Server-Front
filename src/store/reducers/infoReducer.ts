import { InfoAction, InfoReducerTypes, InfoState } from "../../types/InfoTypes";

const initialState: InfoState = {
    message: ""
}

export const infoReducer = (state = initialState, action: InfoAction): InfoState => {
    switch (action.type) {
        case InfoReducerTypes.SHOW_MESSAGE:
            return {message: action.message}
        default:
            return state;
    }
}