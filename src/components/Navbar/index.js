import './index.css';
import { useState } from 'react';

import logo from '../../assets/Logo.png';
import menuIcon from '../../assets/Menu Icon.svg';

export default function(props) {
    const [dropDownVisible, setDropDownVisible] = useState(false);

    return <>
        {props.showLogo && 
            <div class="logo img-container">
                <img src={logo} />
            </div>
        }
        <div 
            class="menu btn img-container"
            tabindex="0" 
            onClick={() => setDropDownVisible(true)} 
            onBlur={() => setDropDownVisible(false)}
        >
            <img src={menuIcon} />
            <div id="drop-down" className={dropDownVisible ? '' : 'hidden'} >
                <a href="">Home</a>
                <a href="">Blog</a>
                <a href="">Events</a>
            </div>
        </div>
        <nav>
            <a href="" className="current">Home</a>
            <a href="">Blog</a>
            <a href="">Events</a>
            <hr />
        </nav>
    </>
}