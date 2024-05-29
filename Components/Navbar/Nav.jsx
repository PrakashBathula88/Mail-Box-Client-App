import React from "react";
import "../Navbar/Nav.css";
import { Link, useNavigate } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
export default function Nav() {
  const navigate=useNavigate();
  const HomeNavigation=()=>{
    navigate('/');
  }
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
                  className="image-settinf"
                  onClick={HomeNavigation}
                ></img>
              </Link>
            </li>
          </div>
          <div className="search-container ">
            <li>
            <IoIosSearch className="search-icon" />
              <input type="search" placeholder="Search..."></input>
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
