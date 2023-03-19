import './styles/LogoBar.css'
import MainLogo from "/src/content/img/tile_pictures/header_logos.png"
import { Link } from "react-router-dom"


const LogoBar = () => {
    return (
        <div className="logoBar">
            <div className="mainLogo">
                <Link to="/">
                    <img
                        src={MainLogo}
                        // width="580"
                        alt="The Government of Moscow"
                    />
                </Link>
            </div>
        </div>
    )
};

export default LogoBar;