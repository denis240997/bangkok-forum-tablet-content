import { Link } from "react-router-dom"


const NavBrand = () => {
    return (
        <Link to="/">
            <div className="navBrand">
                <h1>MoscowGov</h1>
            </div>
        </Link>
    )
};

export default NavBrand;