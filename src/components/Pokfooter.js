import React from 'react'
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';
 

const Pokfooter = () =>{
    return(

               
       <div>
           <footer style={{fontSize:'25px',marginTop:'20px',height:'50px',textAlign:'center',backgroundColor:'#ffc1077a',}}>
            <a target="_blank" src='/ig.png' href='https://www.whatsapp.com/' style={{color:"#121013",}}>@ Daxa Poriya &ensp; <WhatsAppIcon style={{color:'#075e54'}}/></a>
            <a target="_blank" href="https://www.instagram.com/"> <InstagramIcon  style={{color:'#e95950'}}/></a>  
            <a target="_blank" href="https://www.facebook.com/">  <FacebookIcon  style={{color:'#3b5998'}}/></a>
            <a target="_blank" href="https://mail.google.com/mail/u/0/#inbox"> <EmailIcon style={{color:"#EA4335"}}/></a>
            
           
           </footer>
       
       </div>
    )
}

export default Pokfooter



