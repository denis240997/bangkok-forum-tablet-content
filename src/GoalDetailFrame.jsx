import SubGoalCard from "./components/SubGoalCard";
import { useLocation } from 'react-router-dom';


const GoalDetailFrame = () => {

    const location = useLocation()
    const subgoals = location.state

    return (
        <div className="goalDetailFrame">
            <div className="goalDetailColumn">
                {
                    subgoals.map((goal, index) => (<SubGoalCard subgoal={goal} key={index} />))
                }
            </div>
        </div>
    )
};

export default GoalDetailFrame;