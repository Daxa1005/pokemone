import React, { useState } from 'react'

const Studentdetails = ()=>{

    // const Studnet = [
    //     {
    //       sname:'daxa',
    //       senrollno:'01',
    //       scontactno:'12435627380',
    //       saddress:'surat',
    //       semail:'poriya@gmail.com',
    //       sgender:'female'
    //     },
    // ]
      

    const[sname,setsname]=useState('')
    const[senrollno,setsenrollno]=useState('')
    const[scontactno,setscontactno]=useState('')
    const[saddress,setsaddress]=useState('')
    const[semail,setsemail]=useState('')
    const[sdepartment,setdepartment]=useState('')
    const[sgender,setsgender]=useState('')

    const[student,setstudent]=useState([])


    const addstudentdetails = () =>{
        setstudent([...student,{
            studentname:sname,
            studentenrollno:senrollno,
            studentcontactno:scontactno,
            studentaddress:saddress,
            studentemail:semail,
            studentdeparment:sdepartment,
            studentgender:sgender,
        }])
    }

    
const reset = () => {

  setsname("")
  setsenrollno("")
  setscontactno("")
  setsaddress("")
  setsemail("")
  setdepartment("")
  setsgender("") 
    
}



    return(

        <div className="page-student">
            <lable for='sname'>Student name:</lable>
            <input type='text' id='sname' name='sname' value='' placeholder='enter your name'value={sname}
            onChange={e=>{
                setsname(e.target.value)
            }}/><br/>

            <lable for='senrollno'>Student Enroll no:</lable>
            <input type='number' id='senrollno' name='senrollno' value='' placeholder='enter your Enroll no' value={senrollno}
            onChange={e=>{
                setsenrollno(e.target.value)
                }}/><br/>
            
            <lable for='scontactno'>Student contactno:</lable>
            <input type='number' id='scontactno' name='scontactno' value='' placeholder='enter your contactno' value={scontactno}
            onChange={e=>{
                setscontactno(e.target.value)
            }}/><br/>

            <lable for='saddress'>Student Address:</lable>
            <input type='text' id='saddress' name='saddress' value='' placeholder='enter your address' value={saddress}
            onChange={e=>{
                setsaddress(e.target.value)
            }}/><br/>

            <lable for='semail'>Student Email:</lable>
            <input type='text' id='semail' name='semail' value='' placeholder='enter your email' value={semail}
            onChange={e=>{
                setsemail(e.target.value)
            }}/><br/>

            <lable for='sdepartment'>Student Department:</lable>
            <select id='department' name='department' onChange={e=>{
                setdepartment(e.target.value)
            }}>
                <option disabled selected>Select an opton</option>
                <option value="computer">Computer</option>
                <option value="it">I.T</option>
                <option value="texttile">TextTile</option>
                <option value="automobile">AutoMobile</option>
                <option value="civil">Civil </option>

            </select><br/>

            <lable for='sgender'> Gender:</lable>
            <input type='radio' id='male' name='sgender' value='male' 
            onChange={e=>{
                setsgender(e.target.value)
            }} />Male
            <input type='radio' id='female' name='sgender' value='female'
            onChange={e=>{
                setsgender(e.target.value)
            }} />Female
            <input type='radio' id='other' name='sgender' value='other'
            onChange={e=>{
                setsgender(e.target.value)
            }} />Other<br/>


    
            <button id='submit' name='submit' onClick={addstudentdetails}>submits</button>
            <button id='reset' name='reset' onClick={reset}>Reset</button>

            <table>
                <tr>
                    <td>Student Name</td>
                    <td>Student Enrollment no</td>
                    <td>Student Contactno</td>
                    <td>Student Address</td>
                    <td>Student Email</td>
                    <td>Student Department</td>
                    <td>Gender</td>
                    
                </tr>

                
                {
                    student.map((items) => {
                        return (
                            <tr>
                            {" "}
                            <td>{items.studentname}</td>
                            <td>{items.studentenrollno}</td>
                            <td>{items.studentcontactno}</td>
                            <td>{items.studentaddress}</td>
                            <td>{items.studentemail}</td>
                            <td>{items.studentdeparment}</td>
                            <td>{items.studentgender}</td>
                            </tr>
                            
                            );
                        }
                    )
                }
                




            </table>
        </div>

    )
}

export default Studentdetails