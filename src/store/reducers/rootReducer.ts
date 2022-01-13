import { combineReducers } from "redux";
import { salesRaportReducer } from "./salesRaportReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers(
    {
        user: userReducer,
        salesRaport: salesRaportReducer
    }
)

export type RootState = ReturnType<typeof rootReducer>;