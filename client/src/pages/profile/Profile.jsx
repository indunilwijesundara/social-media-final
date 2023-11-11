import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import React from 'react'
import { useState } from "react";
import { useEffect } from "react";
import Post from "../../components/post/Post";
import axios from "axios";
import { useParams } from "react-router";




  const Profile = () => {
  const PF= process.env.REACT_APP_PUBLIC_FOLDER;
  const [user,setUser] = useState({});
  const username = useParams().username;
  
  
  console.log(username)
   useEffect(()=>{
    const fetchUser = async () =>{
 const res = await axios.get(`http://localhost:8800/api/users/?username=${username}`);
 setUser(res.data)
    };
   fetchUser();
  },[]);

 return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={user.coverPicture ? PF+user.coverPicture : PF + "person/cover.PNG"}
                alt=""
              />
              <img
                className="profileUserImg"
                 src={user.profilePicture ? PF+user.profilePicture : PF + "person/avatar.jpg"}
                alt=""
              />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">{user.username}</h4>
                <span className="profileInfoDesc">{user.desc}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username={username}/>
            <Rightbar user={user}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile
