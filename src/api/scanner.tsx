import axios from "axios";

export const sendBarcode = async (barcode: string): Promise<string> => {
    let mode = process.env.REACT_APP_MODE?.replace(" ", "");
    const response = await axios.post(`${mode === "production" ? "https://sleepy-savannah-27109.herokuapp.com" : "http://localhost:5000"}/api/scanner`, {"barcode": barcode});
    return response.data;
}