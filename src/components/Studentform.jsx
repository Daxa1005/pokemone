import React, { useState } from 'react'

const Studentform = ({Addstudent, Student, setStudent,Remove}) =>{

    const handleChange=(e)=>{
        setStudent({...Student,[e.target.name]:e.target.value})
    }

    // const[sdepartment,setsdepartment]=useState()

  

    return(

        <div class="container" >
           
            
            <h1>STUDENT MANAGEMENT</h1>
            <label id='sname'>Student name:</label>
            <input type='text' name='sname' value={Student.sname}  placeholder='enter  your name' 
            onChange={(e)=>{
                handleChange(e)
            }}/><br/>

                <label id='senrollno'>Student Enrollno:</label>
            <input type='text' name='senrollno' value={Student.senrollno} placeholder='enter  your Enrollment no'
            onChange={(e)=>{
                handleChange(e)
            }}/><br/>

            <label id='semail'>Student Email:</label>
            <input type='text' name='semail' value={Student.semail} placeholder='enter your Email'
            onChange={(e)=>{
                handleChange(e)
            }}/><br/>

            <lable id='saddress'>Student Address:</lable>
            <input type='textaera' name='saddress' value={Student.saddress} placeholder='enter your address' 
            onChange={(e)=>{
                handleChange(e)
            }}/><br/>

            <label id='sphoneno'>Student Phoneno:</label>
            <input type='number' name='sphoneno' value={Student.sphoneno} placeholder='enter your phoneno' 
            onChange={(e)=>{
                handleChange(e)
            }}/><br/>

            <label id='sdepartment'>Student Department:</label>
            <select id='sdepartment' name='sdepartment' value={Student.sdepartment}
           onChange={(e)=>{
            handleChange(e)
        }}>
                <option disabled selected>select option</option>
                <option value='computer'>computer</option>
                <option value='I.T'>I.T</option>
                <option value='TextTile'>TextTile</option>
                <option value='Civil'>Civil</option>
                <option value='AutoMobile'>AutoMobile</option>
            </select><br/>

            <label id='sgender'>Student Gender:</label>
            <input type='radio' name='sgender' value='Male'
            onChange={(e)=>{ handleChange(e) }}/>Male<br/>
            <input type='radio' name='sgender'  value='Female'
            onChange={(e)=>{ handleChange(e) }}/>FeMale<br/>
            <input type='radio' name='sgender'  value='Other'
            onChange={(e)=>{ handleChange(e) }}/>Other<br/>

            <button id='submit' name='submit' onClick={Addstudent}>Submit</button>
            <button id="reset" name='reset' onClick={Remove}>Reset</button>

            
            </div>
           
       

    )
}

export default Studentform