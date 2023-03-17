const GoalCard = ({ goal }) => {
    return (
        <div className="goalCard" id={`goal_${goal.number}`}>
            <div className="cardNameContainer">
                <div className="goalNumber">{goal.number}</div>
                <div className="goalName">{goal.name.toUpperCase()}</div>
            </div>
            <div className="cardImgContainer">
                <img
                    className="goalLogo"
                    src={goal.logo}
                    height={500}
                    width={500}
                />
            </div>
        </div>
    )
};

export default GoalCard;