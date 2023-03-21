import AwardIcon from "/src/icons/Award.svg"
import "./styles/AwardsCard.css"


const AwardCard = ({ yearAwards }) => {
    return (
        <div className="awardCard">
            <div className="header">
                <div className="awardsYear">{yearAwards.year}</div>
                <img className="awardIcon" src={AwardIcon} />
            </div>
            <ul className="awardList">
                {
                    yearAwards.awards.map((award, index) => <li key={index} >{award.toUpperCase()}</li>)
                }
            </ul>
        </div>
    );
}

export default AwardCard;