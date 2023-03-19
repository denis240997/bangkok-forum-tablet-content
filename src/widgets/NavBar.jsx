import NavBrand from "../components/NavBrand";
import NavMenu from "./NavMenu";
import './styles/NavBar.css'


const NavBar = () => {
    return (
        <div className="navBar">
            <NavBrand />
            <NavMenu />
        </div>
    )
};

export default NavBar;