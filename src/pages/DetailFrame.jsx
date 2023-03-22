import PageLayout from "./PageLayout";
import { useLocation } from 'react-router-dom';
import './styles/DetailFrame.css'
import BottomNav from "../widgets/BottomNav";
import DetailList from "../components/DetailList";
import Awards from "../widgets/Awards";
import DetailLogo from "../components/DetailLogo";
import DetailQR from "../components/DetailQR";


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
                return ""; // done in advance
            case "href":
                return <DetailQR key={index} href={item.href} />;
            default:
                return <p key={index} >{item}</p>;
        };
    };

    return (
        <PageLayout title={goal.name}>
            <div className="detailContainer">
                {
                    content.filter((item) => (item.type === "logo"))
                        .map((item, index) => <DetailLogo key={index} src={item.href} />)
                }
                {
                    content.map((item, index) => (
                        setContent(item, index)
                    ))
                }
                <div className="clear"></div>
                <BottomNav />
            </div>
        </PageLayout>
    )
};

export default DetailFrame;