export enum InfoReducerTypes{
    SHOW_MESSAGE = "SHOW_MESSAGE",
    CLEAN_STORE = "CLEAN_STORE"
}

interface InfoActionShowMessage{
    type: InfoReducerTypes.SHOW_MESSAGE
    message: string
}

export type InfoAction = InfoActionShowMessage;

export interface InfoState{
    message: string
}