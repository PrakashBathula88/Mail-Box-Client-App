import React from "react";
import { BsPencil } from "react-icons/bs";
import { FaRegStar } from "react-icons/fa";
import { MdOutlineSnooze } from "react-icons/md";
import { IoSendOutline } from "react-icons/io5";
import { MdOutlineDrafts } from "react-icons/md";
import { MdForwardToInbox } from "react-icons/md";
import "../Vertical bars/Vertical.css"
export default function Verticalbars() {
  return (
    <div className="vertical-bars-container">
    <div >
      <div  >
        <button className="compose-button">
          <BsPencil /> Compose
        </button>
      </div>
      <div className="menu-items">
        <ul>
          <li className="All-li-tages">
            <MdForwardToInbox />
            Inbox
          </li>
          <li className="All-li-tages">
            <FaRegStar /> Star
          </li>
          <li className="All-li-tages">
            <MdOutlineSnooze /> Snoozed
          </li>
          <li className="All-li-tages">
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
