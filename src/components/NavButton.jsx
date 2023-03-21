import { useNavigate } from "react-router-dom";
import "./styles/NavButton.css"

const BackButton = ({ text, icon, dest }) => {

    const navigate = useNavigate();

    return (
        <div className="navButton" onClick={() => navigate(dest)}>
            <div className="navButtonText">{text.toUpperCase()}</div>
            <img className="navButtonIcon" src={icon}/>
        </div>
    );
};

export default BackButton;