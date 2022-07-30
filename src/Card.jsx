import React from 'react'
import './Card.css';
import av from './pic/hashim.jpeg';
import { Avatar } from '@mui/material';
function Card(props) {
  return (
    
    <>
    <div className="card">
        <div className="card-header">
        <Avatar alt="Remy Sharp" src={props.avatar} />
        <h5>{props.userName}</h5>
        </div>
        <img src={props.image}
         alt="" 
         className="card-img" />
        <div className="card-footer">
           <h5><strong>hashim</strong>{props.text}</h5>
        </div>
    </div>
    </>
  )
}

export default Card;