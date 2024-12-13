import { combineReducers } from "redux";
import statisticReducer from "./bStatisticReducer";
import bStatusesReducer from "./bstatusesReduser";
import { infoReducer } from "./infoReducer";
import { salesRaportReducer } from "./salesRaportReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers(
    {
        user: userReducer,
        salesRaport: salesRaportReducer,
        info: infoReducer,
        bStatuses: bStatusesReducer,
        bStatistic: statisticReducer
    }
)

export type RootState = ReturnType<typeof rootReducer>;