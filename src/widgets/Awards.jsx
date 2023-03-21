import AwardsCard from "../components/AwardsCard";
import "./styles/Awards.css"


const Awards = ({ awards }) => {
    return (
        <div className="awardsContainer">
            {
                awards.map((yearAwards, index) => <AwardsCard yearAwards={yearAwards} key={index} />)
            }
        </div>
    );
}
 
export default Awards;