import ScanQRIcon from "/src/icons/ScanQR.svg"
import "./styles/DetailQR.css"


const API_URL = "https://chart.googleapis.com/chart?"

const DetailQR = ({ href }) => {
    return (
        <>
            <div className="modalBackground">
                <div className="modalQRCode">
                    <img
                        src={`${API_URL}cht=qr&chs=350x350&chl=${href}`}
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