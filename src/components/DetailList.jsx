import "./styles/DetailList.css"


const DetailList = ({ items }) => {
    return (
        <ul className="detailList">
            {
                items.map((item, index) => <li key={index} >{item}</li>)
            }
        </ul>
    );
};

export default DetailList;