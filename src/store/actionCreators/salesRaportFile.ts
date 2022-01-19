import axios from "axios";
import { Dispatch } from "react";
import { ClearStoreAction, SalesRaportAction, SalesRaportActionTypes } from "../../types/salesRaport";
import { generateResutObject, saveFile } from "../../utils/saveFile";

export function postSalesRaportFile(file: File){
    return async (dispatch: Dispatch<SalesRaportAction>) => {
        try{
            dispatch({type: SalesRaportActionTypes.FETCH_USER_ACTION});
            const data = new FormData();
            data.append("raport", file);
            let mode = process.env.REACT_APP_MODE?.replace(" ", "");
            const response = await axios.post(`http://${mode === "production" ? "192.168.1.230:5000" : "localhost:5000"}/api/raport/sales`, data);
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