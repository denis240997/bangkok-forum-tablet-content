import { Link } from "react-router-dom"
import './styles/GoalCard.css'


const GoalCard = ({ goal }) => {
    return (
        <Link
            to="/goal/"
            state={goal}
            className="goalCard"
            id={`goal_${goal.number}`}
        >

            <div className="cardNameContainer">
                <div className="goalNumber">{goal.number}</div>
                <div className="goalName">{goal.name.toUpperCase()}</div>
            </div>

            <div className="cardImgContainer">
                <img
                    className="goalLogo"
                    src={goal.logo}
                />
            </div>

        </Link>
    )
};

export default GoalCard;