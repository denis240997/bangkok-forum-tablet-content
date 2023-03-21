import { Link } from "react-router-dom";
import "./styles/NavButton.css"


const NavButton = ({ text, icon, dest }) => {
    return (
        <div className="navButton">
            <div className="navButtonText">{text.toUpperCase()}</div>
            <img className="navButtonIcon" src={icon}/>
            <Link to={dest} />
        </div>
    );
};

export default NavButton;