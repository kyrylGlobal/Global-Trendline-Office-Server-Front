import { useEffect, useRef, useState } from "react";
import { sendBarcode } from "../../../api/scanner";
import styles from "./scanner.module.css";

const Scanner = () => {
    const startBarcodeContent = "<Enter Code Here>";
    let [barcodeContent, setBarcodeContent] = useState(startBarcodeContent);
    let [sendingStatus, setSendingStatus] = useState("Waiting for barcode sending...");
    let [useScanner, _setUseScanner] = useState(false);

    let useScannerRef = useRef(useScanner);

    const setUseScannerState = (newState: boolean) => {
        _setUseScanner(newState);
        useScannerRef.current = newState;
    }

    useEffect(() => {
        let barCode = "";
        let timeOut: NodeJS.Timeout;
        const keyDownFunc = (e: KeyboardEvent) => {
            let keyCode = e.keyCode;
            if(useScannerRef.current && (keyCode >= 48 && keyCode <= 57)) {
                console.log(useScannerRef.current, "inside");
                clearTimeout(timeOut);
                barCode += String.fromCharCode(keyCode);
                timeOut = setTimeout(async () => {
                    setBarcodeContent(`<${barCode}>`);
                    setSendingStatus(await sendBarcode(barCode));
                    barCode = "";
                }, 200)
            }
        }

        document.addEventListener("keydown", keyDownFunc)
        return () => {
            document.removeEventListener("keydown", keyDownFunc);
        }
    }, [])

    const cleanBarcode = () => {
        setBarcodeContent(startBarcodeContent);
    }
    return (
        <>
            <h1 className={styles.barcode}>{barcodeContent}</h1>
            <button className={styles.clean} onClick={cleanBarcode}>Clean</button>
            <div className={styles.useScannerCheckBox}>
                <input type="checkbox" id="useScannerCheckBox" checked={useScannerRef.current} onChange={(e) => {setUseScannerState(e.target.checked)}}/>
                <span className={styles.noselect}>Use Scanner ?</span>
            </div>
            <p className={styles.sendingInfo}>{sendingStatus}</p>
        </>
    )
}

export default Scanner;