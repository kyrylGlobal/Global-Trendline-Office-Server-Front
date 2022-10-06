import axios from "axios";

export const updatePresents = async (): Promise<string> => {
    let mode = process.env.REACT_APP_MODE?.replace(" ", "");
    const response = await axios.get(`${mode === "production" ? "https://sleepy-savannah-27109.herokuapp.com" : "http://localhost:5000"}/api/baselinker/update/presents`);
    return response.data;
}



