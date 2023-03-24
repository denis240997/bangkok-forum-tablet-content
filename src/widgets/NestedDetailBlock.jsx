import PlusCrossLogo from '/src/icons/PlusCross.svg'
import { useState } from 'react';
import "./styles/NestedDetailBlock.css"


const NestedDetailBlock = ({ children, title }) => {

    const [state, setState] = useState({ expand: false });

    const EXPAND_STATE = { transform: "rotate(45deg)" }
    const [crossStyle, setCrossStyle] = useState({});

    const HIDDEN_STATE = { display: "none" }
    const [style, setStyle] = useState(HIDDEN_STATE);

    const changeState = () => {
        if (state.expand) {
            setStyle(HIDDEN_STATE)
            setCrossStyle({})
        } else {
            setStyle({})
            setCrossStyle(EXPAND_STATE)
        }
        setState({ expand: !state.expand })
    };

    return (
        <div className="nestedDetailBlock" >
            <div className="dropDownButtonArea" onClick={() => changeState()} >
                <h3>{title.toUpperCase()}</h3>
                <img className='dropDownArrow' src={PlusCrossLogo} style={crossStyle} />
            </div>
            <div className="nestedDetailContent" style={style} >
                {children}
            </div>
        </div>
    );
}

export default NestedDetailBlock;