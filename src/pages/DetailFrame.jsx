import PageLayout from "./PageLayout";
import { useLocation } from 'react-router-dom';
import './styles/DetailFrame.css'
import BottomNav from "../widgets/BottomNav";
import DetailList from "../components/DetailList";
import Awards from "../widgets/Awards";
import DetailLogo from "../components/DetailLogo";


const DetailFrame = () => {

    const location = useLocation()
    const goal = location.state
    const content = goal.content

    const setContent = (item, index) => {
        switch (item.type) {
            case "awards":
                return <Awards key={index} awards={item.content} />;
            case "list":
                return <DetailList key={index} items={item.content} />;
            case "logo":
                return <DetailLogo key={index} src={item.href} />;
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
                <div class="clear"></div>
                <BottomNav />
            </div>
        </PageLayout>
    )
};

export default DetailFrame;