import axios from "axios";
import { Link } from "react-router-dom";

import { useContext } from "react";
import { Context } from "../../context/Context";
import "./sidebar.css";

export default function Sidebar() {
  const PF = "http://localhost:5000/images/"
 
  const { user, dispatch } = useContext(Context);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img className="sidebarimg" src={PF+(user.profilePic ? user.profilePic : 'default.jpg')} alt="" />
        <h1>{user.username}</h1>
        <p className="sidebardesc">
        {user.desc}
        </p>
      </div>
     
      
    </div>
  );
}
