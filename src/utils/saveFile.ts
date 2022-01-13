import { ResultSalesRaportFile } from "../types/salesRaport";

export const saveFile = (fileName: string, responseData: any):void => {
    const resultFile = new Blob([responseData], {type: "text/xml"});
    const downloadLink = document.createElement("a");

    downloadLink.href = URL.createObjectURL(resultFile);
    fileName = `finish_${fileName}`;
    downloadLink.setAttribute('download', fileName);
    downloadLink.click();
};

export const generateResutObject = (fileName: string, responseData: any): ResultSalesRaportFile => {
    const url = URL.createObjectURL(new Blob([responseData], {type: "text/xml"}));
    fileName = `finish_${fileName}`;
    return {fileName, url};
};