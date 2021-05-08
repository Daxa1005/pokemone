import React, { useState } from "react";

const Persondetilas = () => {
  const [personInput, setpersonInput] = useState("");
  const[fname,setfname]=useState("");
  const[lname,setlname]=useState("");
  const[gender,setgender]=useState("");
  const[address,setaddress]=useState("");
  const[contactno,setcontactno]=useState("");


  const persons = [
    {
      firstname: "Daxa",
      lastname: "Poriya",
      gender: "female",
      address: "surat",
      contactno: 1233456890,
    },
    {
      firstname: "manisha",
      lastname: "poriya",
      gender: "female",
      address: "surat",
      contactno: 12337488948,
    },
    {
      firstname: "harshil",
      lastname: "patel",
      gender: "male",
      address: "surat",
      contactno: 1233456890,
    },
    {
      firstname: "shivam",
      lastname: "patel",
      gender: "male",
      address: "surat",
      contactno: 1233456890,
    },
    {
      firstname: "daksha",
      lastname: "patel",
      gender: "female",
      address: "vdodara",
      contactno: 1233424890,
    },
    {
      firstname: "kirtan",
      lastname: "patel",
      gender: "male",
      address: "vapi",
      contactno: 1223456890,
    },
    {
      firstname: "manisha",
      lastname: "vagha",
      gender: "female",
      address: "surat",
      contactno: 1298456890,
    },
  ];
 
  const [peoples, setPeoples] = useState(persons)
  const males = persons.filter((person) => {
    if (person.gender === "male") {
      return person;
    }
  });
  console.log(males);

const filterdata = persons.filter(data =>{
    if(data.firstname.includes(personInput))
    return data
})
console.log(filterdata)


const  addperson = () => {
        setPeoples([...peoples,{
            firstname:fname,
            lastname:lname,
            gender:gender,
            address:address,
            contactno:contactno, 
    }])
    
}



  return (
      
    <div>
      {/* <input type="text" placeholder="enter the person detail" value={personInput} onChange={e => {
          persons(e.target.value)
      }}></input>{" "}
      <br /> */}

      <label for="firstname">first name:</label>
        <input type="text" id="firstname" name="firstname" value={fname} placeholder="enter the first name " 
        onChange={e=>{
            setfname(e.target.value)
        }}></input><br/>

     <label for="lastname">last name:</label>
        <input type="text" id="lastname" name="lastname" value={lname} placeholder="enter the last name " 
          onChange={e=>{
            setlname(e.target.value)
        }}></input><br/>

    <lable for="gender">gender:</lable><br/>

    <input type="radio" id="male" name="gender" value='male'  
       onChange={e=>{
        setgender(e.target.value)
    }}/> Male
    <input type="radio" id="female" name="gender"  value='Female'
      onChange={e=>{
        setgender(e.target.value)
    }}/>Female
    <input type="radio" id="other" name="gender" value='Other'
      onChange={e=>{
        setgender(e.target.value)
    }}/>Other
    
    <br />

    <label for="address">address:</label>
        <input type="textarea" id="address" name="address" placeholder="enter the last name" value={address} 
          onChange={e=>{
            setaddress(e.target.value)
        }}></input><br/>

    <label for="contact no">contact no:</label>
        <input type="number" id="contactno" name="contactno" placeholder="enter the last name" value={contactno}
          onChange={e=>{
            setcontactno(e.target.value)
        }}></input><br/>

    <button id='submit' name='submit' onClick={addperson} >Submit</button>
    





        

      
      <table border="2">
        {/* <tr> */}
        {/* {
                    persons.map(person=>{
                        return <td>{person.firstname}</td>
                    })
                }
                </tr> */}

        <tr>
          <td>first name</td>
          <td>last name</td>
          <td>gender</td>
          <td>address</td>
          <td>contact no</td>
        </tr>

        {/* {
        persons.filter((person) => {
            if (person.firstname.includes(personInput)) return person;
          })
          .map((item) => {
            return (
              <tr>
                {" "}
                <td>{item.firstname}</td>
                <td>{item.lastname}</td>
                <td>{item.gender}</td>
                <td>{item.address}</td>
                <td>{item.contactno}</td>
              </tr>
            );
          })} */}

{
        peoples.filter((person) => {
            if (person.lastname.includes(personInput)) return person;
          })
          .map((item) => {
            return (
              <tr>
                {" "}
                <td>{item.firstname}</td>
                <td>{item.lastname}</td>
                <td>{item.gender}</td>
                <td>{item.address}</td>
                <td>{item.contactno}</td>
              </tr>
            );
          })}

          
        {/* {persons.map((person) => {
          return (
            <tr>
              {" "}
              <td>{person.firstname}</td>
              <td>{person.lastname}</td>
              <td>{person.gender}</td>
              <td>{person.address}</td>
              <td>{person.contactno}</td>
            </tr>
          );
        })} */}
      </table>
    </div>
  );
};

export default Persondetilas;
