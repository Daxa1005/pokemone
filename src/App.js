import React ,{useState} from 'react'
import './App.css';
import Form from './components/Form'
import Header from './components/Header'
import Footer from './components/Footer'
import Calculator from './components/Calculator'
import Counter from './components/Counter'
import Array from './components/Array'
import Array2 from'./components/Array2'
import Persondetilas from './components/Persondetilas'
import Studentdetails from './components/Studentdetails'
import Counter2 from './components/Counter2'
import Studentform from './components/Studentform'
import Studentlist from './components/Studentlist'
import Api from './components/Api'
import Posts from './components/Posts'
import Photo from './components/Photo'
import Pokemon from './components/Pokemon'
import Pokfooter from './components/Pokfooter'
import Pokheader from './components/Pokheader'
import TicTac from './components/TicTac'
import Ticmodal from './components/Ticmodal'




function App() {

  const [Student,setStudent]=useState({
    sname:"",
    senrollno:"",
    semail:"",
    saddress:"",
    sphoneno:"",
    sdepartment:"",
    sgender:null,
});


const [studentlist,setStudentlist] = useState([]);




  const Addstudent = () =>{

    if( studentlist.find(item => item.senrollno === Student.senrollno) !== undefined ) {
      setStudentlist(studentlist.map(item => {                                        
        if(item.senrollno === Student.senrollno) {
          return Student
        }
        return item
      }))          
    }else  setStudentlist([...studentlist,{
      sname:Student.sname,
      senrollno:Student.senrollno,
      semail:Student.semail,
      saddress:Student.saddress,
      sphoneno:Student.sphoneno,
      sdepartment :Student.sdepartment,
      sgender:Student.sgender,
    }])

  }
  
  const Remove = () => {
   
    setStudent({
      sname:"",
      senrollno:"",
      semail:"",
      saddress:"",
      sphoneno:"",
      sdepartment:"",
      sgender:"",
  });
  
}

const Delete = (index) => {
   
  setStudentlist(studentlist.filter((item, i) => {
    if(index !== i) {
      return item
    }
  
  }))
  
  
}

  const Update =(item,index)=>{
      setStudent({
        sname:item.sname,
        senrollno:item.senrollno,
        semail:item.semail,
        saddress:item.saddress,
        sphoneno:item.sphoneno,
        sdepartment:item.sdepartment,
        sgender:item.sgender,

      })
    //  Delete(index)  
  }

  //tic toc


  const [winner, setWinner] = useState();
  const [game, setGame] = useState([
    [-1, -1, -1],
    [-1, -1, -1],
    [-1, -1, -1],
  ]);

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    
  };

  const reset = () => {
    setOpen(false);
    setGame([
      [-1, -1, -1],
      [-1, -1, -1],
      [-1, -1, -1],
    ]);
  };




  return (
    <div className="App" >
      
      {/* <Calculator/> */}
      {/* <Counter/> */}
      {/* <Array/> */}
      {/* <Form/> */}

      {/* <Array2/> */}
      {/* <Persondetilas/> */}
      {/* <Studentdetails/> */}
      {/* <Counter2/> */}
       {/* <Studentform  Addstudent={Addstudent} Student={Student} setStudent={setStudent} Remove={Remove}/>
      <Studentlist studentlist={studentlist} Delete={Delete} Update={Update}  />  */}
     
      {/* <Api/> */}
     
      {/* <Posts/> */}
      {/* <Photo/> */}

      {/* <Pokheader/>   */}
      <Pokemon/> 
      <Pokfooter/>

      {/* <TicTac  winner={winner}  setWinner={setWinner} game={game} setGame={setGame} open={open} setOpen={setOpen}/>
      <Ticmodal  winner={winner} reset={reset} setGame={setGame} open={open} setOpen={setOpen}  handleClose={handleClose} handleOpen={handleOpen} /> */}
   
    </div>
  );
}
export default App;
