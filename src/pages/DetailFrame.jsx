import PageLayout from "./PageLayout";
import { useLocation } from 'react-router-dom';
import './styles/DetailFrame.css'
import BottomNav from "../widgets/BottomNav";
import DetailList from "../components/DetailList";
import Awards from "../widgets/Awards";
import DetailLogo from "../components/DetailLogo";
import DetailQR from "../components/DetailQR";
import NestedDetailBlock from "../widgets/NestedDetailBlock";
import SliderModal from "../components/SliderModal";


const DetailFrame = () => {

    const location = useLocation()
    const goal = location.state

    const setContent = (item, index) => {
        switch (item.type) {
            case "presentation":
                return <SliderModal key={index} {...item} />;
            case "awards":
                return <Awards key={index} awards={item.content} />;
            case "list":
                return <DetailList key={index} items={item.content} />;
            case "image":
                return <h1 key={index} >IMAGE</h1>;
            case "readmore":
                return <DetailQR key={index} href={item.href} />;
            case "subcategory":
                return <NestedDetailBlock key={index} title={item.name}>
                    {fillDetails(item)}
                </NestedDetailBlock>;
            default:
                return <p key={index} >{item}</p>;
        };
    };

    const fillDetails = (item) => {
        return (
            <>
                {
                    item.logo ? <DetailLogo key={'logo'} src={item.logo} /> : ""
                }
                {
                    item.content.map((item, index) => (
                        setContent(item, index)
                    ))
                }
                <div className="clear"></div>
            </>
        );
    };

    return (
        <PageLayout title={goal.name}>
            <div className="detailContainer">
                {fillDetails(goal)}
                <BottomNav />
            </div>
        </PageLayout>
    )
};

export default DetailFrame;