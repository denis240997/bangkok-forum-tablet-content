import './styles/LogoBar.css'
import MainLogo from "/src/content/img/tile_pictures/header_logo.png"
import { useNavigate } from 'react-router-dom';


const LogoBar = () => {

    const navigate = useNavigate();

    return (
        <div className="logoBar">
            <img
                className="mainLogo"
                src={MainLogo}
                alt="The Government of Moscow"
                onClick={() => navigate("/")}
            />
        </div>
    )
};

export default LogoBar;