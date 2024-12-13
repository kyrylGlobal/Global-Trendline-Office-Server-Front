import { useEffect } from "react";
import { FC} from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import InfoAC from "../../../store/actionCreators/InfoAC";
import styles from './info.module.scss';

const killMessageAfter = 5;

const Info: FC = () => {

    const {message} = useTypedSelector( state => state.info);
    const dispatch = useDispatch();

    useEffect(() => {
        if(message){
            setTimeout(() => {
                dispatch(InfoAC.showMessage(''));
            }, killMessageAfter*1000);
        }
    },[message, dispatch]);

    const InfoContent = () => {
        return(
            <section className={styles.info}>
                <span>{message}</span>
            </section>
        );
    }

    return(
        <>
            {message && <InfoContent />}
        </>
    );
}

export default Info;