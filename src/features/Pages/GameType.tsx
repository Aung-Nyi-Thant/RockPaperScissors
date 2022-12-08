import { useNavigate } from "react-router-dom"
import "./GametypeStyle.css"
export default function GameType(){
    let navigate = useNavigate()
    return(
            <div className="Main_divOfType">
            <button className="BackArrow" onClick={()=>{
                    navigate(`/`)
            }}>&larr;</button>
            <div className="type1" onClick={()=>{
                navigate('/gamePlay/Easy')
            }}>
                <h3 className="Text_type">Easy</h3>
            </div>
            <div className="type2" onClick={()=>{
                navigate('/gamePlay/Normal')
            }}>
                <h3 className="Text_type">Normal</h3>
            </div>
            <div className="type3" onClick={()=>{
                navigate('/gamePlay/Hard')
            }}>
                <h3 className="Text_type">Hard</h3>
            </div>
            </div>
    )
}