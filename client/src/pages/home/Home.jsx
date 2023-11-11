import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import "./home.css"
import React from 'react'

const Home = () => {
   return (
    <>
      <Topbar />
      <div className="homeContainermain">
        <Sidebar />
        <Feed/>
        <Rightbar/>
      </div>
    </>
  );
}

export default Home


