import React, { useState } from 'react'

const Counter2 = () =>{
    
    const[input,setinput]=useState(0)
    const[no,setno]=useState(0)


    const addbutton =()=>{

        setno(no+1);

    }

    const subbutton = () =>{

        setno(no-1);


    }

    const increment = ()=>{

        setno(no+parseInt(input));

    }

    const decrement = ()=>{

        setno(no-parseInt(input));
    }



    return(

        <div>
            <h2>counter</h2>
            <button id='add' onClick={addbutton}>+</button><br/>
            <h1>{no}</h1><br/>
            <button id='sub' onClick={subbutton}>-</button><br/>
            <input type='text' name='no'  value={input} onChange={(e)=>{
                setinput(e.target.value)
            }}/><br/>

            <button id="addition" onClick={increment}>ADD</button>
            <button id="subtraction" onClick={decrement}>SUB</button>
        </div>

    )
}
export default Counter2