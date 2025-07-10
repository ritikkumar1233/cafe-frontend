import { useState } from "react"
import './Home.css';

export default function Home({name, age}){
    let [count, setCount] = useState(0);
    let incCount = ()=>{
        return setCount(count+1);
    }
    let [toggle, setToggle] = useState(true);
    let change = ()=>{
        setToggle(!toggle);
    }

    let colourClass1 = toggle ? "red" : "blue";
    let colourClass2 = toggle ? "b1" : "b2";

    return(
        <div>
            <h1 className={[`${colourClass1} ${colourClass2}`]}>Hello {name}<br></br> You are {age} years old.</h1>
            
            <button onClick={()=>{incCount(); change();}}>count = {count}</button>
        </div>
    )
}





    