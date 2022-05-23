import React, { useContext, useEffect, useState } from 'react'
import './mhomepage.css'
import { useNavigate } from "react-router-dom";
import RecordList from './recordList';
import AppContext from './AppContext';

function ManagerHomepage() {
    const context = useContext(AppContext)
    console.log()
    
    const navigate = useNavigate();
  
    const create = () => {
        navigate("/create")
    }
    
    const logOut = () => {
        navigate("/")
    }
    const Button = (
        <div className='button-container'>
        <input type="button" value="Add New Employee" onClick={create}></input>
        
        
        </div>
    )
    const Profile =(
        <div>
            <div className='pdetails'>Username: {context.username}</div>
            <div className='pdetails'>Manager-Id: {context.m_id}</div><br/>
            <input type="button" className= "logout" value="Logout" onClick={logOut}></input>
        </div>  
    )
  return (
      <div className='app'>
    <div className='title'>Employee Manager</div>
    <div className='mprofile'>{Profile}</div>
    <div className='buttons'>{Button}</div>
    <div className='table'>
    <div className='title2'>Employee Details</div>
    <div>{RecordList()}</div>
    </div>
    </div>
  )
}
export default ManagerHomepage
