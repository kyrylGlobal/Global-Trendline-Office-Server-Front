import axios from "axios";
import { Dispatch } from "redux"
import {StatusesAction, StatusesActionTypes} from '../../types/bStatuses'



export const fetchStatuses = () => {
    return async (dispatch: Dispatch<StatusesAction>) => {
        try{
            dispatch({type: StatusesActionTypes.START_LOADING, body: true});
            let mode = process.env.REACT_APP_MODE?.replace(" ", "");
            const response = await axios.get(`${mode === "production" ? "https://sleepy-savannah-27109.herokuapp.com" : "http://localhost:5000"}/api/baselinker/statuses/get`);
            dispatch({type: StatusesActionTypes.LOADING_SUCCESS, body: response.data})
        } catch(e) {
            dispatch({type: StatusesActionTypes.LOADING_ERROR, body: "Error! Error with fetching statuses"})
        }
    }
}