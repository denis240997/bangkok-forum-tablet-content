import './styles/SubGoalCard.css'
import ArrowIcon from '/src/icons/Arrow.svg'


const SubGoalCard = ({ subgoal }) => {
    return (
        <div className="subGoalCard">
            <div className="subGoalName">{subgoal.name.toUpperCase()}</div>
            <img src={ArrowIcon} alt="--->" />
        </div>
    )
};

export default SubGoalCard;