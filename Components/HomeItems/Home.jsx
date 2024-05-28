import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [emails, setemails] = useState([]);

  useEffect(() => {
    axios
      .get("https://mail--box-client-default-rtdb.firebaseio.com/Cart.json")
      .then((response) => {
        const fetchEmails = Object.keys(response.data).map((key) => ({
          id: key,
          ...response.data[key],
        }));
        setemails(fetchEmails);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <div>
      <ul>
        {emails.map((email) => (
          <div>
            <li>{email.email}</li>
            <li>{email.to}</li>
            <li>{email.subject}</li>
            <li>{email.compose}</li>
          </div>
        ))}
      </ul>
    </div>
  );
}
