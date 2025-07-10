//  rfc

import React, { useState } from 'react'

// export default function Temp({flag}) {
    // if (flag) return <h1>Flag is true</h1>;
    // else return <h1>Flag is false</h1>

    // return flag ? <h1>Flag is true</h1> : <h1>Flag is false</h1>

    // return flag && <h1>Flag is true</h1>
//     let [toggle, setToggle] = useState(false);
//     let click = ()=>{
//         setToggle(!toggle);
//     }

//     const handleClick = ()=>{
//         alert("Hello world");
//     }

//     const handleSubmit = (name)=>{
//         alert(`Hello ${name}`);
//     }
//     return(
//         <div>
//             {toggle ?<button onClick={click}>Hide</button> : <button onClick={click}>Show</button>}
//             {toggle && <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam consequuntur corporis dicta neque ratione eos repudiandae quae illum facere architecto.</p>}
//             <br/><br/>
//             <button onClick={handleClick}>click</button>
//             <br/><br/>
//             <button onClick={()=>{handleSubmit("John")}}>Submit</button>
//         </div>
//     )
// }

export default function Temp({flag}) {
    let [score, setScore] = useState(0);
    let incScore = () =>{
        setScore(score+1);
    }
    let decScore = () =>{
        if(score>0){
            setScore(score-1);
        }
    }

    return(
        <div>
            <h3>{score}</h3>
            <p>
                <button onClick={incScore}>Inc Score</button>
            </p>
            <p>
                <button onClick={decScore}>Dec Score</button>
            </p>
        </div>
    );
}