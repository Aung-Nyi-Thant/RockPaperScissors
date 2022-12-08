import { useNavigate } from "react-router-dom";
import "./intoStyle.css"
export default function GameIntro(){
    let navigate = useNavigate();
    return(
        <div>
            <audio src="https://youtu.be/aAaCq2t5fUg" loop autoPlay></audio>
            <div className="mainIntro">
            <div className="Stone_">
                <h4>✊</h4>
            </div>
            <div className="Paper_">
                <h4>✋</h4>
            </div>
            <div className="Latest">
                <h4>✌</h4>
            </div>
            <div>
                <h1 className="RockText">Rock</h1>
                <h1 className="PaperText">Paper</h1>
                <h1 className="ScissorsText">Scissors</h1>
            </div>
            <div onClick={()=>{
                navigate("/type")
            }}><button className="PlayBtn"><h1 style={{"fontSize":"80px",color:"#f3943d",border:"none"}}>Play</h1></button></div>
            </div>
        </div>
    )
}