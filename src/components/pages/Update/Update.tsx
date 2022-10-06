import { useState } from "react";
import { updatePresents } from "../../../api/update";

const Update = () => {

    let [updatePresentInfo, setUpdatePresentInfo] = useState("No response");
    
    const onUpdatePresent = async () => {
        setUpdatePresentInfo(await updatePresents());
    }

    return(
        <section>
            <button onClick={onUpdatePresent}>Update</button>
            <span>{updatePresentInfo}</span>
        </section>
    )
}

export default Update;