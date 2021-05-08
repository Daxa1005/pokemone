import React, { useState } from 'react'

const Array = () =>{

    

    const [arr,setArr]=useState([])
    const [inputhandle,setinputhandle]=useState("")
    const [hobbies,sethobbies]=useState("")


    const addarray = () =>{
        if(inputhandle.length<1){
            return
        }else{
            setArr([...arr,inputhandle])
            setinputhandle("")            
        }
        console.log(arr)
    }

    // const printhobbies = () =>{
    //     hobbies.map(x=>console.log(x))
    // }
    // console.log(hobbies)

  const arr2 = ['daxa', 'kandarp']

    return(
        <div>
            <table>
            <input type='text' value={inputhandle}    
            onChange={(e)=>{
                setinputhandle(e.target.value)
        }}
            ></input><br/>
            <button id='add' onClick={addarray} >Add</button>
            </table>
            {/* <ol>
                <li>1</li>
                <li>2</li>
            </ol> */}
            <ol>
            {
                arr.map(item => {
                    return <li>{item} </li>
                })
            }
            </ol>
        </div>

    )
}

export default Array