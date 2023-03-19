import NavItem from "../components/NavItem"

const items = [
    {name: "Item 1"},
    {name: "Item 2"},
    {name: "Item 3"}
];

const NavMenu = () => {
    return (
        <nav className="navMenu">
            {
                items.map((item, index) => (<NavItem content={ item } key={ index }/>))
            }
        </nav>
    )
};

export default NavMenu;