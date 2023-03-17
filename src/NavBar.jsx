import NavBrand from "./components/NavBrand";
import NavMenu from "./components/NavMenu";


const NavBar = () => {
    return (
        <div className="navBar">
            <NavBrand />
            <NavMenu />
        </div>
    )
};

export default NavBar;