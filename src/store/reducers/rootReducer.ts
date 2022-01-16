import { combineReducers } from "redux";
import { infoReducer } from "./infoReducer";
import { salesRaportReducer } from "./salesRaportReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers(
    {
        user: userReducer,
        salesRaport: salesRaportReducer,
        info: infoReducer
    }
)

export type RootState = ReturnType<typeof rootReducer>;