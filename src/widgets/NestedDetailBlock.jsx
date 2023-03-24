import DropDownLogo from '/src/icons/Dropdown.svg'
import { useState } from 'react';
import "./styles/NestedDetailBlock.css"


const NestedDetailBlock = ({ children, title }) => {

    const [state, setState] = useState({expand: false});

    const EXPAND_STATE = { transform: "scaleY(-1)" }
    const [arrowStyle, setarrowStyle] = useState({});

    const HIDDEN_STATE = { display: "none" }
    const [style, setStyle] = useState(HIDDEN_STATE);

    const changeState = () => {
        if (state.expand) {
            setStyle(HIDDEN_STATE)
            setarrowStyle({})
        } else {
            setStyle({})
            setarrowStyle(EXPAND_STATE)
        }
        setState({expand: !state.expand})
    };

    return (
        <div className="nestedDetailBlock" onClick={() => changeState()} >
            <h3>{title.toUpperCase()}</h3>
            <div className="nestedDetailContent" style={style} >
                {children}
            </div>
            <img className='dropDownArrow' src={DropDownLogo} style={arrowStyle} />
        </div>
    );
}

export default NestedDetailBlock;