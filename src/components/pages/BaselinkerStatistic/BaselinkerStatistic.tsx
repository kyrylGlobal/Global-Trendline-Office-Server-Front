import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { getStatisticOrders, sendStatisticToGoogleSheet, setStatisticPostParams } from "../../../store/actionCreators/bStatisticAC";
import {fetchStatuses} from "../../../store/actionCreators/bStatusesAC";
import { convertUnixToString } from "../../../utils/dateHelper";
import styles from './baselinkerStatistic.module.css';
import StatisticResult from "./StatisticResult/StatisticResult";
import Status from "./Status/Status";

const BaselinkerStatistic = () => {
    const {statuses} = useTypedSelector(state => state.bStatuses);
    let {statisticPostParams, statistic} = useTypedSelector(state => state.bStatistic)
    const dispatch = useDispatch();

    let [searchStatus, setSearchStatus] = useState("");
    let [showStatusesList, setShowStatusesList] = useState(false);
    let [mouseOverStatuses, setMouseOverStatuses] = useState(false);
    let [statusInputFocus, setStatusInputFocus] = useState(false);
    let [resetStatusesss, setResetStatuses] = useState(false);
    let [showFilter, setShowFilter] = useState(false);
    let [showDiagrams, setShowDiagrams] = useState(false);

    useEffect(() => {
        dispatch(fetchStatuses());
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    const resetStatuses = () => {
        setSearchStatus("");
        dispatch(fetchStatuses())
        setResetStatuses(!resetStatusesss);
        dispatch(setStatisticPostParams({...statisticPostParams, statuses: []}))
    }

    const onChangeSearch = (e:React.ChangeEvent<HTMLInputElement>) => {
        setSearchStatus(e.target.value);
    }

    const onChangeDateFrom = (e:React.ChangeEvent<HTMLInputElement>) => {
        let date = Math.floor(new Date(e.target.value).getTime() / 1000)
        date = date - (60 * 2 * 60); // minus two hours
        dispatch(setStatisticPostParams({...statisticPostParams, dateFrom: date}))
    }

    const onChangeDateTo = (e:React.ChangeEvent<HTMLInputElement>) => {
        let date = Math.floor(new Date(e.target.value).getTime() / 1000);
        date = date + (24*60*60) - (60 * 2 * 60); // minus two hours
        dispatch(setStatisticPostParams({...statisticPostParams, dateTo: date}))
    }

    const onMouseOverStatuses = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => setMouseOverStatuses(true);
    const onMouseLeaveStatuses = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setMouseOverStatuses(false);
        if(!statusInputFocus) {
            setShowStatusesList(false);
        }
    }
    const onFocusStatuses = (e: React.FocusEvent<HTMLDivElement, Element>)  => {
        setShowStatusesList(true)
        setStatusInputFocus(true);
    }
    const onBlusrStyles = (e: React.FocusEvent<HTMLDivElement, Element>) => {
        setStatusInputFocus(false);
        setTimeout(() => {
            if(!mouseOverStatuses) {
                setShowStatusesList(false);
            }
        }, 1);
    } 

    return (
        <section className={styles.bStatisticSection}>
            <button className={styles.showFiltersBtn} onClick={() => {setShowFilter(!showFilter)}}>Show Filters</button>
            <div className={styles.filter} style={{display: showFilter ? "grid" : "none"}}>
                <div className={styles.getDates}>
                    <div className={styles.dateFrom}>
                    <label htmlFor="dateFrom">Date from</label>
                        <input type="date" id="dateFrom" onChange={onChangeDateFrom} />
                    </div>
                    <div className={styles.dateTo}>
                        <label htmlFor="dateTo">Date to</label>
                        <input type="date" id="dateTo" onChange={onChangeDateTo}/>
                    </div>
                </div>
                <div className={styles.statuses} onMouseOver={onMouseOverStatuses} onMouseLeave={onMouseLeaveStatuses}>
                    <div className={styles.setStatuses}>
                        <label htmlFor="setStatusesInput">Select Statuses</label>
                        <div className={styles.setStatusesInputHelper}>
                            <input onFocus={onFocusStatuses} onBlur={onBlusrStyles} id="setStatusesInput" type={"text"} value={searchStatus} onChange={onChangeSearch} className={styles.setStatusesInput} placeholder={statisticPostParams.statuses.length > 0 ? `${statuses.find( status => status.id === statisticPostParams.statuses[0]).name}${statisticPostParams.statuses.length > 1 ? `(+${statisticPostParams.statuses.length})`: ""}`: ""}/>
                            <button onClick={resetStatuses}>Reset</button>
                        </div>
                    </div>
                    <div className={styles.statusesList} style={{display: showStatusesList ? "block" : "none"}}>
                        <div className={styles.statusesListHelper}>
                            {statuses.length > 0 ? statuses.filter(status => ((status.name as string).toLowerCase().includes(searchStatus.toLowerCase()))).map( status => (
                                <Status status={status} resetStatuses={resetStatusesss} key={status.id}/>)): ""}
                        </div>
                    </div>
                </div>
                <button className={styles.getStatisticBtn} onClick={() => {dispatch(getStatisticOrders(statisticPostParams))}}>Get Statistic</button>
            </div>
            <div className={styles.results}>
                <div className={styles.resultsOptions}>
                    {Object.keys(statistic).length > 0 ? <button onClick={() => {setShowDiagrams(!showDiagrams)}} className={styles.showDiagrams}>Show Diagrams</button> : ""}
                    {Object.keys(statistic).length > 0 ? <button onClick={() => {sendStatisticToGoogleSheet(statistic, `${convertUnixToString(statisticPostParams.dateFrom)} - ${convertUnixToString(statisticPostParams.dateTo)}`)}} className={styles.showDiagrams}>Send Data To Google Sheet</button> : ""}
                </div>
                { showDiagrams ? <StatisticResult /> : ""}
            </div>
        </section>
    )
}

export default BaselinkerStatistic;