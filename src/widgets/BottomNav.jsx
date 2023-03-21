import NavButton from "../components/NavButton";
import ArrowIcon from "/src/icons/BackArrow.svg";
import HomeIcon from "/src/icons/Home.svg";
import "./styles/BottomNav.css"


const BottomNav = () => {
    return (
        <div className="bottomNav">
            <NavButton text="back" icon={ArrowIcon} dest={-1} />
            <NavButton text="home" icon={HomeIcon} dest="/" />
        </div>
    );
};

export default BottomNav;