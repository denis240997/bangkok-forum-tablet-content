import GoalCard from "../components/GoalCard";
import './styles/MainFrame.css'


const MainFrame = ({ goals }) => {

    const mainTitle = "moscow: current accomplishments and prospects for achieving the sustainable development goals"

    return (
        <div className="mainFrame">
            <div className="contentColumn">
                <div className="mainTitle">
                    {mainTitle.toUpperCase()}
                </div>
                <div className="goalCardsContainer">
                    {
                        goals.map((goal) => (<GoalCard goal={goal} key={goal.number} />))
                    }
                </div>
            </div>
        </div>
    )
};

export default MainFrame;