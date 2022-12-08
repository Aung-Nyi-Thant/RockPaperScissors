import { Component} from "react";
import { useNavigate } from "react-router-dom";
import './GamePlayStyle.css'
export default function GamePlay(){
    function sleep(milliseconds:any) {  
        return new Promise(resolve => setTimeout(resolve, milliseconds));  
     }
     let AiStone = false
     let AiPaper = false
     let AiScissors = false

     let UserStone = false
     let UserPaper = false
     let UserScissors = false
     let ClickCount = 0
     let done = false
     let UserMark = 0
     let AiMark = 0
     let firstTouch = false
     let secondTouch = false
     let running = false
     let type = ""
     let navigate = useNavigate();
     console.log("something")
     class Gameplay extends Component{
        
        // handleClick=()=>{
        //     console.log(this.state.Food)
        // };
        
            state={
                second:0,
                color:"blue",
                colorForAi:"white",
                stone:"white",
                paper:"white",
                scissors:"white",
                Aistone_:"white",
                Aipaper_:"white",
                Aiscissors_:"white",
                Display:"none",
                text:"Start",
                UserMarks:UserMark,
                AiMarks:AiMark
            }
            render(){
                return(
                    <div>
                        <div className="AiDiv">
                        <h3>AI</h3>
                        </div>
                        <div className="Iteam">
                        <div className="Stone" style={{border:`1px solid ${this.state.Aistone_}`}}>
                            <h4 className="Emoji">✊</h4>
                        </div>
                        <div className="Paper" style={{border:`1px solid ${this.state.Aipaper_}`}}>
                            <h4 className="Emoji">✋</h4>
                        </div>
                        <div className="Scissors" style={{border:`1px solid ${this.state.Aiscissors_}`}}>
                            <h4 className="Emoji">✌</h4>
                        </div>
                        <div className="MarksDiv">
                            <h4 className="Marks">3 / {this.state.AiMarks}</h4>
                        </div>
                        </div>
                    <div className="Waiting">
                        <button className="StartBtn" onClick={async ()=>{
                            if(running != true){
                            ClickCount+=1
                            let a = 0
                            const guess = Math.floor(Math.random() * (3 - 1)) + 1;
                            if(guess == 1){
                                if(type == "stone"){
                                    a = 2
                                }else if(type == 'paper'){
                                    a = 3
                                }else{
                                    a = 1
                                }
                            }else if(guess === 2){
                                if(type == "stone"){
                                    a = 1
                                }else if(type == 'paper'){
                                    a = 2
                                }else{
                                    a = 3
                                }
                            }else if(guess === 0){
                                a = Math.floor(Math.random() * (4 - 1)) + 1;
                            }
                            console.log(guess)
                            let count = ClickCount %2
                            running = true
                            if(count == 0){
                                secondTouch = true
                                firstTouch = false
                            }else if(count == 1){
                                firstTouch = true
                                secondTouch =false
                            }
                            console.log("First Tag",firstTouch)
                            console.log("second touch ",secondTouch)
                            console.log("count",count)
                            if(this.state.UserMarks == 3){
                                navigate('/gamePlay/User/celebrate')
                            }else if(this.state.AiMarks == 3){
                                navigate('/gamePlay/Ai/celebrate')
                            }
                            if(firstTouch === true ){
                            console.log("Count",count)
                            if(ClickCount  > 0){
                                this.setState({
                                    Display:""
                                })
                            for( var i = 11 - 1; i >= 0; i-- ){
                                await sleep(1000)
                                if(i < 6){
                                    this.setState({
                                        color:"red"
                                    })
                                }
                                this.setState({
                                    second:i
                                })
                                console.log(i)
                            };
                            console.log("Random number",a)
                            if(a === 1){
                                AiStone = true
                                this.setState({
                                    Aistone_:"#357cf6"
                                })
                                console.log("A is 1")
                                AiPaper = false
                                AiScissors = false
                            }else if(a == 2){
                                AiPaper = true
                                this.setState({
                                    Aipaper_:"#357cf6"
                                })
                                console.log("A is 2")
                                AiScissors = false
                                AiStone = false
                            }else{
                                AiScissors =true
                                this.setState({
                                    Aiscissors_:"#357cf6"
                                })
                                console.log("A is 3")
                                AiPaper = false
                                AiStone = false
                            }
                            if(AiStone === true && UserScissors === true){
                                console.log("You Lose")
                                if(UserMark != 0 ){
                                    this.setState({
                                        UserMarks:this.state.UserMarks-1
                                    })
                                }
                                this.setState({
                                    AiMarks:this.state.AiMarks+1
                                })
                            }else if(UserStone === true && AiScissors === true){
                                console.log("You Win")
                                if(this.state.AiMarks != 0){
                                    this.setState({
                                        AiMarks:this.state.AiMarks-1
                                    })
                                }
                                this.setState({
                                    UserMarks:this.state.UserMarks+1
                                })
                            }else if(AiPaper === true && UserStone === true){
                                console.log("You Lose")
                                if(this.state.UserMarks != 0 ){
                                    this.setState({
                                        UserMarks:this.state.UserMarks-1
                                    })
                                }
                                this.setState({
                                    AiMarks:this.state.AiMarks+1
                                })
                            }else if(UserPaper === true && AiStone === true){
                                console.log("You Win")
                                if(this.state.AiMarks != 0){
                                    this.setState({
                                        AiMarks:this.state.AiMarks-1
                                    })
                                }
                                this.setState({
                                    UserMarks:this.state.UserMarks+1
                                })
                            }else if(AiScissors === true && UserPaper === true){
                                console.log("You Lose")
                                if(this.state.UserMarks != 0 ){
                                    this.setState({
                                        UserMarks:this.state.UserMarks-1
                                    })
                                }
                                this.setState({
                                    AiMarks:this.state.AiMarks+1
                                })
                            }else if(UserScissors === true && AiPaper == true){
                                console.log("You Win")
                                if(this.state.AiMarks != 0){
                                    this.setState({
                                        AiMarks:this.state.AiMarks-1
                                    })
                                }
                                this.setState({
                                    UserMarks:this.state.UserMarks+1
                                })
                            }
                            done = true
                        }
                        
                        }
                        else if(secondTouch == true){
                            done = false
                            console.log("Else")
                            this.setState({
                                second:0,
                                color:"blue",
                                colorForAi:"white",
                                stone:"white",
                                paper:"white",
                                scissors:"white",
                                Aistone_:"white",
                                Aipaper_:"white",
                                Aiscissors_:"white",
                                Display:"none",
                                text:"Next"
                            }
                            )
                            let AiStone = false
                            AiPaper = false
                            AiScissors = false

                            UserStone = false
                            UserPaper = false
                            UserScissors = false
                        }
                        running = false
                        console.log(AiPaper)
                            console.log(AiScissors)
                            console.log(AiStone)
                            console.log("____")
                            console.log(UserPaper)
                            console.log(UserScissors)
                            console.log(UserStone)
                            }
                            }}>{this.state.text}</button>
                        <h4 style={{color:this.state.color , display:this.state.Display}}>{this.state.second}</h4>
                        </div>
                        <div className="Iteam2">
                        <div className="Stone" style={{border:`1px solid ${this.state.stone}`}} onClick={()=>{
                            if(done === false){
                            UserStone = true
                            type = "rock"
                            if(UserStone === true){
                                this.setState({
                                    stone:"#357cf6",
                                    paper:"white",
                                    scissors:"white"

                                })
                            }
                            UserScissors=false
                            UserPaper=false
                        }
                        }}>
                            <h4 className="Emoji">✊</h4>
                        </div>
                        <div className="Paper" style={{border:`1px solid ${this.state.paper}`}} onClick={()=>{
                            if(done === false){
                            UserPaper = true
                            type = "paper"
                            if(UserPaper){
                                this.setState({
                                    stone:"white",
                                    paper:"#357cf6",
                                    scissors:"white"
                                })
                            }
                            UserScissors=false
                            UserStone=false
                            }
                        }}>
                            <h4 className="Emoji">✋</h4>
                        </div>
                        <div className="Scissors" style={{border:`1px solid ${this.state.scissors}`}} onClick={()=>{
                            if(done === false){
                            UserScissors=true
                            type="scissors"
                            if(UserScissors){
                                this.setState({
                                    stone:"white",
                                    paper:"white",
                                    scissors:"#357cf6"
                                })
                            }
                            UserPaper=false
                            UserStone=false
                            }
                        }}>
                            <h4 className="Emoji">✌</h4>
                        </div>
                        <div className="MarksDiv">
                            <h4 className="Marks">3 / {this.state.UserMarks}</h4>
                        </div>
                        </div>
                        <div className="UserDiv">
                        <h3>You</h3>
                        </div>
                    </div>
                    
                )
            }
        }
    return(
        <Gameplay/>
    )
}