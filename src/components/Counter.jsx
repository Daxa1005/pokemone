import React, { useState } from 'react'

const Counter = () =>{


    const [num,setNum]=useState(0)
    const [input,setInput]=useState(0)

    const increment = () =>{    
        setNum(num+1);
        
    }

    const decrement = () =>{
        setNum(num-1);
    }

    const increadd = () =>{
        setNum(num+parseInt(input))
    }

    const decresub = () =>{
        setNum(num-parseInt(input))
    }


    return(

        <div>
            <table>
                <h3>Counter</h3>

                {/* <input type="text" name="input" id="answer" value={input}></input><br/> */}

          
                    <button id="add" onClick={increment}>increment</button>
                    
                    {/* {counter} */}

                    <h1>{num}</h1>

                    <button id="lower" onClick={decrement}>decrement</button><br/>


                    <input text='text' name='num' value={input} 
                    onChange ={(e)=>{
                        setInput(e.target.value)
                    }}  ></input><br/>
                       {/* onClick={() => addvalues("7")} */}
                    <button id="addition" onClick={increadd} >+</button>
                    <button id="subtraction" onClick={decresub}>-</button>
            </table>
        </div>

    )
}

export default Counter