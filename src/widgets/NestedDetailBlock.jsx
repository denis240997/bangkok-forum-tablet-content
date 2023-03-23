import DropDownLogo from '/src/icons/Dropdown.svg'
import { useState } from 'react';
import "./styles/NestedDetailBlock.css"


const NestedDetailBlock = ({ children, title }) => {

    const HIDDEN_STATE = { display: "none" }
    const [style, setStyle] = useState(HIDDEN_STATE);
    const changeState = () => {
        style.display ? setStyle({}) : setStyle(HIDDEN_STATE)
    };

    return (
        <div className="nestedDetailBlock">
            <div className="nestedDetailTitle" onClick={() => changeState()}>
                <h3>{title.toUpperCase()}</h3>
                <img src={DropDownLogo} />
            </div>
            <div className="nestedDetailContent" style={style} onClick={() => changeState()}>
                {children}
            </div>
        </div>
    );
}

export default NestedDetailBlock;