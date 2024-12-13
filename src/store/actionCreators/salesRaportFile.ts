import axios from "axios";
import { Dispatch } from "react";
import { ClearStoreAction, SalesRaportAction, SalesRaportActionTypes } from "../../types/salesRaport";
import { generateResutObject, saveFile } from "../../utils/saveFile";

export function postSalesRaportFile(file: File, useNewVersion: boolean){
    return async (dispatch: Dispatch<SalesRaportAction>) => {
        try {
            dispatch({type: SalesRaportActionTypes.FETCH_USER_ACTION});
            const data = new FormData();
            data.append("raport", file);
            data.append('useNewVersion', useNewVersion.toString())
            let mode = process.env.REACT_APP_MODE?.replace(" ", "");
            const response = await axios.post(`${mode === "production" ? "https://sleepy-savannah-27109.herokuapp.com" : "http://localhost:5001"}/api/raport/sales`, data);
            saveFile(file.name, response.data);
            dispatch(
                {
                    type: SalesRaportActionTypes.FETCH_USER_SUCCESS, 
                    resultFile: generateResutObject(file.name, response.data)
                });
        }
        catch(error: any | undefined){
            dispatch({type: SalesRaportActionTypes.FETCH_USER_ERROR, message: error.response.data.message});
        }
    }
}

export function clearSalesRaportStore(): ClearStoreAction{
    return {
        type: SalesRaportActionTypes.CLEAN_STORE
    }
}