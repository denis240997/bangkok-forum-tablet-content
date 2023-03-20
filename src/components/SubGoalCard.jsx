import './styles/SubGoalCard.css'
import ArrowIcon from '/src/icons/Arrow.svg'


const SubGoalCard = ({ subgoal, goal, index }) => {
    return (
        <div className={`subGoalCard goal_${goal.number} i_${index}`} >
            <div className="subGoalName">{subgoal.name.toUpperCase()}</div>
            <img src={ArrowIcon} alt="--->" />
        </div>
    )
};

export default SubGoalCard;