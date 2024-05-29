import React, { useEffect, useState } from "react";
import { GoStar } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../ReadMessage/Readmessage.css";
export default function Readmessage() {
  const [seeEmail, setsSeemail] = useState([]);
  const { readid } = useParams();
  useEffect(() => {
    axios
      .get(
        `https://mail--box-client-default-rtdb.firebaseio.com/Cart/${readid}.json`
      )
      .then((response) => {
        if (response.data) {
          setsSeemail({
            ...response.data,
            timestamp: new Date().toDateString(),
          });
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, [readid]);

  if (!seeEmail) {
    return <div>Loading...</div>;
  }
  return (
    <div className="All-read">
      <div className="heading">
        <h3>Text message</h3>
        <span>
          Gmail/inbox <GoStar />
        </span>
      </div>
      <div className="email-something">
        <li className="All-li-items">
          <CgProfile />
          {seeEmail.to}  
        </li >
        <li  className="All-name-items">{seeEmail.email}</li>
        <li className="All-name"> subject :-{seeEmail.subject}</li>
        <li className="time-stamp">{seeEmail.timestamp}</li>
      </div>
      <div className="all-compose">
        <li>{seeEmail.compose}</li>
      </div>
    </div>
  );
}
