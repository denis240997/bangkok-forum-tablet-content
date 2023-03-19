import GoalCard from "../components/GoalCard";
import './styles/MainFrame.css'


const MainFrame = ({ goals }) => {
    return (
        <div className="mainFrame">
            {
                goals.map((goal) => (<GoalCard goal={ goal } key={ goal.number }/>))
            }
        </div>
    )
};

export default MainFrame;