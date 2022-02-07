import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import InfoAC from "../../../store/actionCreators/InfoAC";
import { clearSalesRaportStore, postSalesRaportFile } from "../../../store/actionCreators/salesRaportFile";
import { ResultSalesRaportFile } from "../../../types/salesRaport";
import RaportEditiongInstructions from "./RaportEditingInstructions/RaportEditingInstructions";
import style from './raportEditing.module.scss';

const RaportsEditing = () => {

    const {loading, resultFile, error} = useTypedSelector(state => state.salesRaport);
    const [showInstructionBtn, setShowBtn] = useState(false);

    const dispatch = useDispatch();

    const onFileChange = (event: React.ChangeEvent<HTMLInputElement>): void  => {
        let files = event.target.files;
        if(files && files.length > 0){
            dispatch(postSalesRaportFile(files[0]));
        }
    }

    const onShowInstructionBtn = (e: React.MouseEvent<HTMLElement>) => {
        if(showInstructionBtn) {
            setShowBtn(false);
        } else {
            setShowBtn(true);
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
        <section className={style.raportEditing}>
            <input type={'file'} onChange={onFileChange}/>
            {resultLocalFile && <a href={resultLocalFile.url} type="application/octet-stream">File <b>{resultLocalFile.fileName}</b> was downloaded on your computer, if no press this link</a>}
            <div>
                <button className={style.showInstructionsBtn} onClick={onShowInstructionBtn}>Show Instructions</button>
            </div>
            {showInstructionBtn && <RaportEditiongInstructions />}
        </section>
    );
}

export default RaportsEditing;