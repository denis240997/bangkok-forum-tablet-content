import PageLayout from "./PageLayout";
import GoalCard from "../components/GoalCard";
import './styles/MainFrame.css'


const MainFrame = ({ goals, title }) => {
    return (
        <PageLayout title={title}>
            <div className="goalCardsContainer">
                    {
                        goals.map((goal) => (<GoalCard goal={goal} key={goal.number} />))
                    }
                </div>
        </PageLayout>
    )
};

export default MainFrame;