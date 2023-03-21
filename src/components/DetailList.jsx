import "./styles/DetailList.css"


const DetailList = ({ items }) => {
    return (
        <ul className="detailList">
            {
                items.map((item) => <li>{item}</li>)
            }
        </ul>
    );
};

export default DetailList;