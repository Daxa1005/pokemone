import React, { useState } from 'react'

const Array2 = () =>{

    const [Arr,setArray]=useState([])
    const [inputhandle,setinputhandle]=useState('')
    const[hobbies,sethobbies]=useState('')
    const [reset,setreset]=useState("")



    const addArray =() =>{
        if(inputhandle.length<1){
            return
        }else{
            setArray([...Arr,inputhandle])
            setinputhandle('')
        }
        console.log(Arr)
    }

    

    const clear = () => {
        setArray([])
    }

    return(

        <div>
            <input type='text'
             onChange={(e)=>setinputhandle(e.target.value)}
             ></input><br/>
            <button id="add"  onClick={addArray}>add</button>
            

            
            <button id='results' onClick={clear} >reset</button>

            <ol>
            {
                Arr.map(add => {
                    return <li>{add}</li>

            })
            }
         </ol>

        </div>


       
    )
}

export default Array2