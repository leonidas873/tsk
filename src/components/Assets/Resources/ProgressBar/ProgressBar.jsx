import { useState } from "react";
import './ProgressBar.css';
import {RiErrorWarningLine} from 'react-icons/ri';

const ProgressBar = ({now, max, title}) => {



    return (
        <div className="progressBar">
            <div className="progressBar__first-row">
                <div className="progressBar__nums">{now}/{max}</div>
                <div className="progressBar__title">
                    <RiErrorWarningLine/>
                    {" "}
                    <span>{title}</span>
                </div>
            </div>
        <div className="progressBar__bar">
            <div className="progressBar__bar-filled" style={{width:`${now/max*100}%`}}></div>
        </div>
        </div>
       
    )
}

export default ProgressBar;