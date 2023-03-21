import ScanQRIcon from "/src/icons/ScanQR.svg"
import "./styles/DetailQR.css"
import { useState } from "react"


const API_URL = "https://chart.googleapis.com/chart?"

const DetailQR = ({ href }) => {

    const HIDDEN_STATE = { display: "none" }
    const [style, setStyle] = useState(HIDDEN_STATE);

    return (
        <>
            <div className="expandButton" onClick={() => setStyle({})}>
                READ MORE
            </div>
            <div className="modalBackground" style={style} onClick={() => setStyle(HIDDEN_STATE)} >
                <div className="modalQRCode">
                    <img
                        src={`${API_URL}cht=qr&chs=500x500&chl=${href}`}
                        alt={href}
                    />
                </div>
                <div className="hintQRCode">
                    <img src={ScanQRIcon} />
                    <div>
                        Scan QR code using your phone's camera
                    </div>
                </div>
            </div>
        </>
    );
};

export default DetailQR;