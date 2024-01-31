import { useReducer } from "react"
import "../App.css";
const Second=(props)=>{
    
    let reducer=(state)=>{
        if(state.hide){
            return {
                text:props.text,
                hide:false
            }            
        }
        return {
            text: "Text Hidden",
            hide: true,
        };  
    }

    const [state, dispatch] = useReducer(reducer, {
        text: props.text,
        hide: false,
    });

    return (
        <div>
            <h3>{state.text}</h3>
            <button className="btn1" onClick={dispatch}>Toggle</button>
        </div>
    )
}

export default Second