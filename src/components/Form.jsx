import React, { useState } from 'react'




const Form  = () => {
        // const [firstname,setFirstName] = useState("")
        // const [lastname,setLastname]=useState("")
        // const [address,setAddress]=useState("")
        // const [Radio,setradio]=useState("")
        // const [email,setEmail]=useState("")
        // const [contact,setContact]=useState("")
        // const [date,setDate]=useState("")
        //const [checkbox,setCheckbox]=useState([])
        const[person,setperson]=useState({
                fname:null,
                lname:null,
                address:null,
                contactno:null,
                birthday:null,
                email:null,
                gender:null,
              
        })

        const handleChange = (e) =>{
                setperson({...person,[e.target.name]:e.target.value})
        }

        const [hobbies,sethobbies]=useState([])
        const [inputhandle,setinput]=useState("")


        const addhobbies = () => {
                if(inputhandle.length < 1 ){
                        return
                }else{
                        sethobbies([...hobbies,inputhandle])
                        setinput("")
                        console.log(hobbies)
                }
        }

        const printhobbies = () => {
        hobbies.map(x=>console.log(x))
               
        }

         

        return (
        <div className="page-form">
        <label for="fname">First name:</label>
                <input type="text" id="fname" name="fname" placeholder="enter the first name" onChange={(e)=>{
                        handleChange(e)
                }}></input>   {"My firstname: "+person.fname} <br />
        
                <label for="lname">last name:</label>
                <input type="text" id="lname" name="lname" placeholder="enter the last name "
                onChange={(e)=>{
                        handleChange(e)
                }}></input>{"my lastname:"+person.lname} <br />
        
        
                <label for="address">Address:</label>
                <input type="text" id="address" name="address" placeholder="enter the address"
                onChange={(e)=>{
                        handleChange(e)
                }}></input>{"Address:"+person.address}<br/>
        
                <label for="contact no">Contact No:</label>
                <input type="number" id="contact no" name="contact no" placeholder="enter the Contact no."
                onChange={(e)=>{
                        handleChange(e)
                }} ></input>{"mobile no:"+person.contactno}<br />
        
                <label for="birthday">Birthday:</label>
                <input type="date" id="birthday" name="birthday" placeholder="enter the birthday" 
                onChange={(e)=>{
                        handleChange(e)
                }}></input>{"my birthday:"+person.date}<br />
        
                <lable for="email">Email:</lable>
                <input type="email" id="email" name="email" placeholder="enter the email"
                onClick={(e)=>{
                        handleChange(e)
                }} ></input>{"Email:"+person.email}<br />
        
                <lable for="gender">gender:</lable>
                <lable for="male">male</lable>
                <input type="radio" id="male" name="gender" value="male"
                onChangeValue={(e)=>{
                        handleChange(e)
                }}></input>
                <lable for="female">female</lable>
                <input type="radio" id="female" name="gender" value="female"
                onChangeValue={(e)=>{  
                        handleChange(e)
                }}></input>
                <lable for="other">other</lable>
                <input type="radio" id="other" name="gender" value="other"
                onChangeValue={(e)=>{
                        handleChange(e)
                }}></input><br />
                
        {/* {checkbox} */}

                
                

                <lable for="hobbies">Hobbies:</lable>
                <input type="text" value={inputhandle}  name="hobbies"
                onChange={(e)=>{
                        setinput(e.target.value)
                }}
                ></input>
               

                <button type="button" onClick={addhobbies}>add</button>
                
                
                <lable for="reading">reading</lable>
                <input type="checkbox" id="reading" name="hobbies" value="reading"
                // onChange={(e)=>{
                //         setCheckbox(e.target.value)
                // }}
                ></input><br/>
                <lable for="cooking">cooking</lable>
                <input type="checkbox" id="cooking" name="hobbies" value="cooking"
                //  onChange={(e)=>{
                //         setCheckbox(e.target.value)
                //  }}
                 ></input><br />
                <lable for="dancing">dancing</lable>
                <input type="checkbox" id="dancing" name="hobbies" value="dancing"
                //  onChange={(e)=>{
                //         setCheckbox(e.target.value)
                //  }}
                 ></input><br/>
                <lable for="slepping">slepping</lable>
                <input type="checkbox" id="slepping" name="hobbies" value="slepping" 
                // onChange={(e)=>{
                //         setCheckbox(e.target.value)
                //  }}
                 ></input><br />

                 <button type="button" onClick={printhobbies} >print</button>

                 


        
                <input type="submit" name="submit" ></input><br/>

       

              
                
        
        </div>
        )
}


export default Form