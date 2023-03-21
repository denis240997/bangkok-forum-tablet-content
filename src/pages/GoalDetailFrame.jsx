import PageLayout from "./PageLayout";
import SubGoalCard from "../components/SubGoalCard";
import ImageCard from "../components/ImageCard";
import { useLocation } from 'react-router-dom';
import './styles/GoalDetailFrame.css'
import BottomNav from "../widgets/BottomNav";


const GoalDetailFrame = () => {

    const location = useLocation()
    const goal = location.state
    const subgoals = goal.categories

    return (
        <PageLayout title={goal.name}>
            <div className="subgoalCardsContainer">
                {
                    subgoals.map((subgoal, index) => (
                        subgoal.name
                            ? <SubGoalCard
                                subgoal={subgoal}
                                key={index}
                                index={index}
                                goal={goal}
                            />
                            : <ImageCard
                                src={subgoal.href}
                                key={index}
                                index={index}
                                goal={goal}
                            />
                    ))
                }
                <BottomNav />
            </div>
        </PageLayout>
    )
};

export default GoalDetailFrame;