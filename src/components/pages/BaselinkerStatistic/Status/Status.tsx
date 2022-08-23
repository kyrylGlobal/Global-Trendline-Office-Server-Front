import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { setStatisticPostParams } from "../../../../store/actionCreators/bStatisticAC";
import styles from "./status.module.scss";

interface StatusProps {
    status: any,
    resetStatuses: boolean
}

const Status: React.FC<StatusProps> = ({status, resetStatuses}) => {
    const {statisticPostParams} = useTypedSelector(state => state.bStatistic);
    let dispatch = useDispatch();

    let [active, setActive] = useState(false);

    useEffect(() => {
        setActive(false);
    },[resetStatuses]);

    const onStatusClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setActive(!active);
        if(!active) {
            console.log(status.id)
            dispatch(setStatisticPostParams({...statisticPostParams, statuses: [...statisticPostParams.statuses, status.id]}));
        } else {
            dispatch(setStatisticPostParams({...statisticPostParams, statuses: statisticPostParams.statuses.filter(statusId => statusId !== status.id)}));
            console.log(statisticPostParams.statuses);
        }
    }
    
    return (<div className={active ? styles.activeStatus : ""} onClick={onStatusClick}>
        {status.name}
    </div>)
}

export default Status;