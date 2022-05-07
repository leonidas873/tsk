import ProgressBar from "./ProgressBar/ProgressBar";
import "./Recources.css";

const Recources = () => {
    return <div className="recources">
        
        <div className="recources__box">
            <div className="recources__box-title">Recources</div>
            <div className="recources__bar">
            <ProgressBar now={102} max={391} title="energy"/>
            <button className="recources__btn">Obtain</button>
            </div>
            <div className="recources__bar">
            <ProgressBar now={1205} max={1645} title="bandwidth"/>
            <button className="recources__btn">rent</button>
            </div>
        </div>

        <div className="recources__box">
            <div className="recources__box-title">CORE Power</div>
            <div className="recources__bar">
            <ProgressBar now={20} max={20} title="CORE Power"/>
            </div>
            <div className="recources__power-btns">
            <button className="power-btn">Get Votes</button>
            <button className="power-btn">Votes</button>
            <button className="power-btn power-btn--disabled">Claim</button>
            </div>
        </div>


    </div>
}

export default Recources;