import React  from 'react'
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Pokfooter from './Pokfooter';
import { useState } from 'react';





const Pokheader = ({setFilteredList, pk}) =>{
    
const[name,setName]=useState([]);
const[input,setInput]=useState('');

    function handleSearchInput(e) {
        // setInput(e.target.value)
        setFilteredList(pk.filter(poke => {
            if(poke.name.toLowerCase().includes(e.target.value.toLowerCase()))
            return poke
        }))
    }

   
    return(
       <div className='main-header' >
          
              <div className='contanier'>
                
                    <header style={{color:"#dc3545" , backgroundColor:'rgb(255 193 7 / 33%)',textAlign:'start',
                                    textShadow: '2px 2px 4px #000000',display:'flex'}}>
                        <img src='http://pngimg.com/uploads/pokemon_logo/pokemon_logo_PNG6.png' alt=' ' width='600px' height='400px' />
               
                        
                            <div >
                                <nav className='menu' >
                                            <ul className='menu-bar' >
                                            <li class="Home">
                                            <a target='_blank' href="/Home/" style={{color:'#1111d4', marginLeft:'650px',textAlign:'left',marginTop:'10px',marginBottom:'10px'}}>
                                            <span>Home</span>
                                            </a>
                                            </li>
                                            <li class="About us">
                                            <a href="/About us/" style={{color:'#1111d4'}}>
                                            <span>About us</span>
                                            </a>
                                            </li>
                                            <li class="Gallery">
                                            <a href="/Gallery/" style={{color:'#1111d4'}}>
                                            <span>Gallery</span>
                                            </a>
                                            </li>
                                            </ul>
                                </nav>             
                             </div>
             
                        
            


                        <div>
                             <input type='text' placeholder="Serach" value={input} onChange={(e)=>{
                                 setInput(e.target.value)
                                 handleSearchInput(e)
                            }} ></input>
                   
                            

                        
                         </div>
                </header>
      
        </div>
        </div>
        
    )
        }   
export default Pokheader