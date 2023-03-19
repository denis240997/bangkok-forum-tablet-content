import './styles/SubGoalCard.css'


const SubGoalCard = ({ subgoal }) => {
    return (
        <div className="subGoalCard">
            <div className="subGoalName">{subgoal.name.toUpperCase()}</div>
        </div>
    )
};

export default SubGoalCard;