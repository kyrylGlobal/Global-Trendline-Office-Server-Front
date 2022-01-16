import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import InfoAC from "../../../store/actionCreators/InfoAC";
import { clearSalesRaportStore, postSalesRaportFile } from "../../../store/actionCreators/salesRaportFile";
import { ResultSalesRaportFile } from "../../../types/salesRaport";

const RaportsEditing = () => {

    const {loading, resultFile, error} = useTypedSelector(state => state.salesRaport);

    const dispatch = useDispatch();

    const onFileChange = (event: React.ChangeEvent<HTMLInputElement>): void  => {
        let files = event.target.files;
        if(files && files.length > 0){
            dispatch(postSalesRaportFile(files[0]));
        }
    }

    let [resultLocalFile, setresultLocalFile] = useState<ResultSalesRaportFile | null>(null);

    const responses = (resultFile: ResultSalesRaportFile | null | undefined, error: string | null | undefined, loading: boolean | undefined) => {
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
    }

    useEffect(() => {
        responses(resultFile, error, loading);
    },[resultFile, error, loading, responses])

    return(
        <section>
            <input type={'file'} onChange={onFileChange}/>
            {resultLocalFile && <a href={resultLocalFile.url} type="application/octet-stream">File <b>{resultLocalFile.fileName}</b> was downloaded on your computer, if no press this link</a>}
        </section>
    );
}

export default RaportsEditing;