import React from "react"
import Second from "./second"
import "../App.css";
const First=()=>{
    
    let listInput=React.createRef()

    let [listData,updateList]=React.useState([])

    let addTask=()=>{
        let newInput=listInput.current.value
        if(newInput===""){
            return
        }
        updateList(prev=>{
            return [...prev,newInput]
        })
        listInput.current.value="";
        listInput.current.focus();
    }

    let handleEnterKey=(e)=>{
        if(e.key==="Enter"){
            addTask();
        }
    }

    return (
        <div>
            <div className="input">
                <input type="text" className="text" ref={listInput} onKeyDown={handleEnterKey} />
                <button className="btn" onClick={addTask} >Add</button>
            </div>
            <div className="list">
                {listData.map((elt, i) => (
                    <Second text={elt} key={i} />
                ))}
            </div>
            <div className="last">
                <button className="btn"
                    onClick={() => {
                        listInput.current.focus();
                    }}
                >
                    Top 
                </button>
            </div>
        </div>
    );
}

export default First