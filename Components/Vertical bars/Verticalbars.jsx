import React from "react";
import { BsPencil } from "react-icons/bs";
import { FaRegStar } from "react-icons/fa";
import { MdOutlineSnooze } from "react-icons/md";
import { IoSendOutline } from "react-icons/io5";
import { MdOutlineDrafts } from "react-icons/md";
import { MdForwardToInbox } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import "../Vertical bars/Vertical.css"
import Home from "../HomeItems/Home";
import Signin from "../SignIn/Signin";
export default function Verticalbars() {
  const navigate=useNavigate();

  const mailBox=()=>{
    navigate('/Mailbox')
  }

  const homenav=()=>{
    navigate('/');
  }

  const sentnav=()=>{
    navigate('/')
  }
  return (
    <div className="vertical-bars-container">
    <div >
      <div  >
        <button className="compose-button" onClick={mailBox} >
          <BsPencil /> Compose
        </button>
      </div>
      <div className="menu-items">
        <ul>
          <li className="All-li-tages" onClick={homenav}>
            <MdForwardToInbox />  
            Inbox
          </li>
          <li className="All-li-tages">
            <FaRegStar /> Star
          </li>
          <li className="All-li-tages">
            <MdOutlineSnooze /> Snoozed
          </li>
          <li className="All-li-tages" onClick={sentnav}>
            <IoSendOutline /> Sent
          </li>
          <li className="All-li-tages">
            <MdOutlineDrafts /> Drafts
          </li>
        </ul>
      </div>
    </div>
    </div>
  );
}
