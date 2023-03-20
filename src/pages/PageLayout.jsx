import './styles/PageLayout.css'


const PageLayout = ({ title, children }) => {
    return (
        <div className="pageFrame">
            <div className="contentColumn">
                <div className="pageTitle">
                    {title.toUpperCase()}
                </div>
                <div className="pageContainer">
                    {children}
                </div>
            </div>
        </div>
    )
};

export default PageLayout;