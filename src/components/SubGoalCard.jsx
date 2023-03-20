import './styles/SubGoalCard.css'
import ArrowIcon from '/src/icons/Arrow.svg'
import { Link } from "react-router-dom"


const SubGoalCard = ({ subgoal, goal, index }) => {
    return (
        <div className={`subGoalCard goal_${goal.number} i_${index}`} >
            <div className="subGoalName">{subgoal.name.toUpperCase()}</div>
            <img src={ArrowIcon} alt="--->" />
            {
                subgoal.content
                ? <Link className='subGoalCardLink' to='/goal/detail/' state={subgoal} />
                : <Link className='subGoalCardLink' to='/goal/points/' state={subgoal} />
            }
        </div>
    )
};

export default SubGoalCard;