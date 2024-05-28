import React from "react";
import "../Navbar/Nav.css";
import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <div>
      <nav>
        <ul>
          <div>
            <li>
              <Link href="Home">
                <img
                  src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png"
                  alt="Loading Image ...."
                ></img>
              </Link>
            </li>
          </div>
          <div>
            <li>
              <Link href="Searching">Searching</Link>
            </li>
          </div>
          <div>
            <li>
              <Link to="/signin" className="linking-signin">
                Signin
              </Link>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
}
