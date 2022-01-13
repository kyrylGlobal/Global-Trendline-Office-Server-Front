import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { postSalesRaportFile } from "../../store/actionCreators/salesRaportFile";

const RaportsEditing: FC = () => {

    const {loading, resultFile, error} = useTypedSelector(state => state.salesRaport);

    const dispatch = useDispatch();

    const onFileChange = (event: React.ChangeEvent<HTMLInputElement>): void  => {
        let files = event.target.files;
        if(files && files.length > 0){
            dispatch(postSalesRaportFile(files[0]));
        }
    }

    useEffect(() => {
        console.log(loading, resultFile, error); 
    })

    return(
        <>
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            <input type={'file'} onChange={onFileChange}/>
            {resultFile && <a href={resultFile.url} download={resultFile.fileName}>Download</a>}
        </>
    );
}

export default RaportsEditing;