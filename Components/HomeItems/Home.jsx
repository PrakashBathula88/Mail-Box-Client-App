import axios from "axios";
import React, { useEffect, useState } from "react";
import "../HomeItems/Home.css";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const [emails, setemails] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    axios
      .get("https://mail--box-client-default-rtdb.firebaseio.com/Cart.json")
      .then((response) => {
        const currentTime = new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });
        const fetchEmails = Object.keys(response.data).map((key) => ({
          id: key,
          ...response.data[key],
          timestamp: currentTime,
          isNew: true,
          isold: false,
        }));
        setemails(fetchEmails);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  
  const readmesagenav = (readid) => {
    axios
      .patch(
        `https://mail--box-client-default-rtdb.firebaseio.com/Cart/${readid}.json`,
        {
          isOld: true,
          isNew: false,
        }
      )
      .then(() => {
        setemails((prevEmails) =>
          prevEmails.map((email) =>
            email.id === readid
              ? { ...email, isOld: true, isNew: false }
              : email
          )
        );
        navigate(`/Read/${readid}`);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handledelete = (readid) => {
    axios
      .delete(
        `https://mail--box-client-default-rtdb.firebaseio.com/Cart/${readid}.json`
      )
      .then(() => {
        setemails((prevEmails) =>
          prevEmails.filter((email) => email.id !== readid)
        );
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div className="All-items">
      <ul>
        {emails.map((email) => (
          <div
            key={email.id}
            className={"emailItem"}
            onClick={() => readmesagenav(email.id)}
          >
            <input type="Checkbox" />
            {!email.isOld && <div className="blueDot"></div>}
            <li>{email.subject}</li>
            <li>{email.compose}</li>

            {/* <li>{email.to}</li> */}
            <li>{email.timestamp}</li>
            <li  >
           <button className="del"onClick={() => handledelete(email.id)}>Delete</button> 
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}
