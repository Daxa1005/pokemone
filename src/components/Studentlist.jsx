import React, { useState } from 'react'

const Studentlist = ({studentlist,Delete,Update}) =>{


    const[input,setinput]=useState('');
    
    // const serach = studentlist.filter(data => {
    //     if(data.dropdown.includes(input))
    //     return data
    // })
    // console.log(serach)

    const[dropdown,setdropdown]=useState('sname')

    



  
   
  
    return(

        <div class="container-fluid">
            
        
            
            <h4>STUDENT LIST</h4>

            <input type='text' name='' placeholder='search student details'  onChange={(e)=>{
                setinput(e.target.value)
            }}></input>

            
            <select id='' name='' onChange={(e)=>{setdropdown(e.target.value)}}>
                <option disabled selected>select any field</option>
                <option value='sname'>sname</option>
                <option value='senrollno'>senrollno</option>
                <option value='semail'>semail</option>
                <option value='saddress'>saddress</option>
                <option value='sphoneno'>sphoneno</option>
                <option value='sdepartment'>sdepartment</option>
                <option value='sgender'>sgender</option>
            </select>


            <table>
                <tbody>
                <tr>
                    <td>Student Name</td>
                    <td>Student EnrollNo</td>
                    <td>Student Email</td>
                    <td>Student Address</td>
                    <td>Student Phone no</td>
                    <td>Student Department</td>
                    <td>Student gender</td>
                    <td>Remove student record </td>
                    <td>edit student detalis</td>
                </tr>

                
                {
                    studentlist.filter((Student) => {
                        if (Student[dropdown].includes(input)) return Student;
                      })
                    .map((items,index) => {
                        return(
                            <tr>
                            {" "}
                            <td>{items.sname}</td>
                            <td>{items.senrollno}</td>
                            <td>{items.semail}</td>
                            <td>{items.saddress}</td>
                            <td>{items.sphoneno}</td>
                            <td>{items.sdepartment}</td>
                            <td>{items.sgender}</td>
                            <td><button id='delete' onClick={()=>{
                                Delete(index)
                            }}>Delete</button></td>
                            <td><button id='Update' onClick={()=>{
                                Update(items,index)
                            }}>Update</button></td>
                            </tr>
                        )
                    })
                }

           
               
                </tbody>
            </table>

        </div>
       
       

    )
}
export default Studentlist