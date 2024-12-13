import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import InfoAC from "../../../store/actionCreators/InfoAC";
import { clearSalesRaportStore, postSalesRaportFile } from "../../../store/actionCreators/salesRaportFile";
import { ResultSalesRaportFile } from "../../../types/salesRaport";

const RaportsEditing = () => {

    const {loading, resultFile, error} = useTypedSelector(state => state.salesRaport);
    const input = useRef<HTMLInputElement | null>(null);
    const [useNewVersion, setUseNewVersion] = useState<boolean>(true);
    
    const dispatch = useDispatch();

    const onFileChange = (event: React.ChangeEvent<HTMLInputElement>): void  => {
        let files = event.target.files;
        if(files && files.length > 0){
            console.log(useNewVersion)
            dispatch(postSalesRaportFile(files[0], useNewVersion));
            event.target.value = '';
        }
    }

    let [resultLocalFile, setresultLocalFile] = useState<ResultSalesRaportFile | null>(null);

    useEffect(() => {
        if(resultFile){
            setresultLocalFile(resultFile);
            dispatch(InfoAC.showMessage("Success :)"));
            dispatch(clearSalesRaportStore());
        }
        if(error){
            dispatch(InfoAC.showMessage(error));
            dispatch(clearSalesRaportStore());
        }
        if(loading && !resultFile){
            dispatch(InfoAC.showMessage("Loading..."));
        }
    },[resultFile, error, loading, dispatch])

    return(
        <section>
            <input type={'file'} onChange={onFileChange}/>
            <div>
                <label htmlFor="useNewVersion">Use new Version?</label>
                <input type="checkbox" checked={useNewVersion} onChange={() => setUseNewVersion(!useNewVersion)} />
            </div>
            {resultLocalFile && <a href={resultLocalFile.url} type="application/octet-stream">File <b>{resultLocalFile.fileName}</b> was downloaded on your computer, if no press this link</a>}
        </section>
    );
}

export default RaportsEditing;