import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Topbar() {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <img style={{height:"30px",width:"30px",marginLeft:"30px",marginTop:"10px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB18Wd2QaB5A_pxUSz8bDvwU3u7PNdPrndS-QnSQQtNEAQXC7KPqWZYY5LWg0KzMYkxKo&usqp=CAU"></img>
          <span className="logo">Messenger</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search here..."
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          {/* <span className="topbarLink">Active</span>
          <span className="topbarLink">Settings</span> */}
        </div>
        <div className="topbarIcons">
          
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge"></span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge"></span>
          </div>
        </div>
       
          <img
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + "person/noAvatar.png"
            }
            alt=""
            className="topbarImg"
          />
        
      </div>
    </div>
  );
}
