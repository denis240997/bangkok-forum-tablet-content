const NavItem = ({ content }) => {
    return (
        <div className="navItem">
            <h1>{ content.name }</h1>
        </div>
    )
};

export default NavItem;