import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import {Button} from '@material-ui/core';
// import { toast, ToastContainer } from 'react-toastify';

const rand =() => {
  return Math.round(Math.random() * 20) - 10;
}

const getModalStyle =()=> {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        textAlign:'center',
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

const Ticmodal = ({winner,reset,open,setOpen,handleClose,handleOpen}) => {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
 

  

  const body = (
    
    <div style={modalStyle} className={classes.paper}>
   
      <h2 id="simple-modal-title">GAME OVER</h2>
      <p id="simple-modal-description" style={{fontSize:'20px'}}>
      game the win player:{winner}
      </p>
    <Button type="button"   onClick={reset}
                            setOpen={open}
                    // open={open}
                    // onClose={handleClose} 
                     variant="contained" color='secondary' >play again game</Button>
     
    </div>
  );

  return (
    <div>
    
    
     
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        
      >
        {body}
      </Modal>
    </div>
  );
}

export default  Ticmodal