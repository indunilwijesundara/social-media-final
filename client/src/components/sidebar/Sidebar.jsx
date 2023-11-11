import "./sidebar.css";

import { Users } from "../../dummyData";
import CloseFriend from "../closeFriend/CloseFriend";
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import GroupsIcon from '@mui/icons-material/Groups';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HelpIcon from '@mui/icons-material/Help';
import WorkIcon from '@mui/icons-material/Work';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';
import HotelIcon from '@mui/icons-material/Hotel';
import { Link } from "react-router-dom";
import Guiders from "../guiders/Guiders";
import { useEffect, useState } from "react";
import axios from "axios";
export default function Sidebar() {
  const [guiders, setGuiders] = useState([]);

  useEffect(() => {
    const fetchGuiders = async () => {
      try {
        // Replace the URL with the actual endpoint to fetch guiders
        const response = await axios.get("http://localhost:8800/api/users/guiders");
        
        setGuiders(response.data);
      } catch (error) {
        console.error("Error fetching guiders:", error.message);
      }
    };

    fetchGuiders();
  }, []);
  console.log(guiders)
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
        <Link to="/" style={{textDecoration:"none"}}>
          <li className="sidebarListItem">
          
            <RssFeedIcon className="icon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          </Link>
          <Link to="/messenger" style={{textDecoration:"none"}}>
          <li className="sidebarListItem">
           <ChatIcon className="icon"></ChatIcon>
            <span className="sidebarListItemText">Chats</span>
          </li>
          </Link>
          <Link to="/messenger" style={{textDecoration:"none"}}>
          <li className="sidebarListItem">
          <PlayCircleIcon className="icon"></PlayCircleIcon> 
            <span className="sidebarListItemText">Videos</span>
          </li>
          </Link>
          <Link to="/hotelhome" style={{textDecoration:"none"}}>
          <li className="sidebarListItem">
          <HotelIcon className="icon"></HotelIcon> 
            <span className="sidebarListItemText">Hotels</span>
          </li></Link>
          <li className="sidebarListItem">
           <BookmarkIcon className="icon"></BookmarkIcon>
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
          <HelpIcon className="icon"></HelpIcon>
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
         <WorkIcon className="icon"></WorkIcon>
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
           <EventIcon className="icon"></EventIcon>
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
           <SchoolIcon className="icon"></SchoolIcon>
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          <span>Contact Your Guider</span>
        
          {guiders.map((u) => (
            <Guiders key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
}
