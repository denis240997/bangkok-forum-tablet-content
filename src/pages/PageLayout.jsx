import './styles/PageLayout.css'


const PageLayout = ({ title, children }) => {
    return (
        <div className="pageFrame">
            <div className="pageTitle">
                {title.toUpperCase()}
            </div>
            {children}
        </div>
    )
};

export default PageLayout;