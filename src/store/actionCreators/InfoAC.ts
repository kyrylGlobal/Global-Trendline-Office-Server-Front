import { InfoAction, InfoReducerTypes } from "../../types/InfoTypes";

const InfoAC = () => {

    return {
        showMessage: (message: string): InfoAction => {
            return {type: InfoReducerTypes.SHOW_MESSAGE, message};
        }
    }
}

export default InfoAC();
