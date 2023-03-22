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
            case "image":
                return <h1 key={index} >IMAGE</h1>;
            case "href":
                return <h1 key={index} >HREF</h1>;
            case "subcategory":
                return <p key={index} style={{color: "red"}}>{JSON.stringify(item)}</p>;
            default:
                return <p key={index} >{item}</p>;
        };
    };

    return (
        <PageLayout title={goal.name}>
            <div className="detailContainer">
                {
                    goal.logo ? <DetailLogo key={'logo'} src={goal.logo} /> : ""
                }
                {
                    content.map((item, index) => (
                        setContent(item, index)
                    ))
                }
                {
                    goal.href ? <DetailQR key={'href'} href={goal.href} /> : ""
                }
                <div className="clear"></div>
                <BottomNav />
            </div>
        </PageLayout>
    )
};

export default DetailFrame;