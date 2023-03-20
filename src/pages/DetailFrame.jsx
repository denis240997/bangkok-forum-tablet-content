import PageLayout from "./PageLayout";
import { useLocation } from 'react-router-dom';
import './styles/DetailFrame.css'


const DetailFrame = () => {

    const location = useLocation()
    const goal = location.state
    const content = goal.content

    const setContent = (item, index) => {
        switch (item.type) {
            case "awards":
                return <p key={index} >awards</p>;
            case "list":
                return <p key={index} >list</p>;
            case "logo":
                return <p key={index} >logo</p>;
            case "href":
                return <p key={index} >href</p>;
            default:
                return <p key={index} >{item}</p>;
        };
    };

    return (
        <PageLayout title={goal.name}>
            <div className="detailContainer">
                {
                    content.map((item, index) => (
                        setContent(item, index)
                    ))
                }
            </div>
        </PageLayout>
    )
};

export default DetailFrame;