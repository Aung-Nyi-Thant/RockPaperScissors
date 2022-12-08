import { useNavigate, useParams } from 'react-router-dom';
import './celebrate_style.css'
export default function Celebrate(){
    let {Winner} = useParams();
    let navigate = useNavigate();
    let backgroundImage = "https://ak.picdn.net/shutterstock/videos/34233742/thumb/1.jpg";
    let text = "Play"
    if(Winner == "User"){
        //nothing
    }else{
        backgroundImage = "https://pluspng.com/img-png/to-lose-a-game-png-s2e16-you-lose-png-1920.png";
        text="Try again"
    }
    return(
        <div>
            <div className="celebrate_div" style={{backgroundImage:`url('${backgroundImage}')`}}>
                <button className='BtnNext' onClick={()=>{
                    navigate(`/gamePlay`)
                }}>{text}</button>

            </div>
        </div>
    )
}