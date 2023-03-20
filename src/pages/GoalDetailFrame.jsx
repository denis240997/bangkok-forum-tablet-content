import PageLayout from "./PageLayout";
import SubGoalCard from "../components/SubGoalCard";
import { useLocation } from 'react-router-dom';
import './styles/GoalDetailFrame.css'


const GoalDetailFrame = () => {

    const location = useLocation()
    const goal = location.state
    const subgoals = goal.categories

    return (
        <PageLayout title={goal.name}>
            <div className="subgoalCardsContainer">
                {
                    subgoals.map((goal, index) => (<SubGoalCard subgoal={goal} key={index} />))
                }
            </div>
        </PageLayout>
    )
};

export default GoalDetailFrame;