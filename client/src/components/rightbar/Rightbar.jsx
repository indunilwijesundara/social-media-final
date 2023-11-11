import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";
import { useContext, useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { Add, Remove, Star } from "@mui/icons-material";

export default function Rightbar({ user }) {
 const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [friends, setFriends] = useState([]);
  const { user: currentUser, dispatch } = useContext(AuthContext);
  const [followed, setFollowed] = useState(
    currentUser.followings.includes(user?.id)
  );
// useEffect(()=>{
//   setFollowed(currentUser.followings.includes(user?.id));
// },[currentUser,user.id]);


  useEffect(() => {
    const getFriends = async () => {
      try {
        const friendList = await axios.get("/users/friends/" + user._id);
        setFriends(friendList.data);
      } catch (err) {
        console.log(err);
      }
    };
    getFriends();
  }, [user]);

  const handleClick = async () => {
    try {
      if (followed) {
        await axios.put(`/users/${user._id}/unfollow`, {
          userId: currentUser._id,
        });
        dispatch({ type: "UNFOLLOW", payload: user._id });
      } else {
        await axios.put(`/users/${user._id}/follow`, {
          userId: currentUser._id,
        });
        dispatch({ type: "FOLLOW", payload: user._id });
      }
      setFollowed(!followed);
    } catch (err) {
    }
  };

  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <span className="birthdayText">Find Things to Do by interest</span>
        </div>
        <span className="tag">
          Collections of Sri Lanka best bookable experiences
        </span>

        <div className="rightbarInterests">
          <div className="Intrest">
            <img className="IntrestImg" src={PF + "/outdoor.png"} alt="" />
            <span className="IntersetText">Outdoor</span>
          </div>
          <div className="Intrest">
            <img className="IntrestImg" src={PF + "/drink.png"} alt="" />
            <span className="IntersetText">Food & Drink</span>
          </div>
          <div className="Intrest">
            <img className="IntrestImg" src={PF + "/mandala.png"} alt="" />
            <span className="IntersetText">Art & Culture</span>
          </div>
          <div className="Intrest">
            <img className="IntrestImg" src={PF + "/reef.png"} alt="" />
            <span className="IntersetText">By the Water</span>
          </div>
          <div className="Intrest">
            <img className="IntrestImg" src={PF + "/browsing.png"} alt="" />
            <span className="IntersetText">Browse All</span>
          </div>
          {/* <img className="IntrestImg" src={PF + "/drink.png"} alt="" />
         
         
          */}
        </div>
        <div className="birthdayContainer">
          <span className="birthdayText">Top experiences on Tripadvisor</span>
        </div>

        <div className="rightbarExperience">
          <div className="Experience">
            <Link to={"/hotel/id"} style={{ textDecoration: "none" }}>
              <img
                className="ExperienceImg"
                src={PF + "/places/1.jpg"}
                alt=""
              />
              <span
                className="ExperienceText"
                style={{ textDecoration: "none" }}
              >
                Flagship Amsterdam Open Boat Canal Cruise - Local live guide
                with bar on board
              </span>
              <div className="Rating">
                <Star style={{ color: "yellow" }} />{" "}
                <Star style={{ color: "yellow" }} /> <Star /> <Star />
                <span>534</span>
              </div>
              <span className="IntersetText">from $20 per adult</span>
            </Link>
          </div>

          <div className="Experience">
            <img className="ExperienceImg" src={PF + "/places/2.jpg"} alt="" />
            <span className="ExperienceText">
              Dubai: Red Dunes ATV, Sandsurf, Camels, Stargazing & 5* BBQ at Al
              Khayma Camp™️
            </span>
            <div className="Rating">
              <Star style={{ color: "yellow" }} />{" "}
              <Star style={{ color: "yellow" }} /> <Star /> <Star />
              <span>534</span>
            </div>
            <span className="IntersetText">from $20 per adult</span>
          </div>
          <div className="Experience">
            <img className="ExperienceImg" src={PF + "/places/3.jpg"} alt="" />
            <span className="ExperienceText">
              Flagship Amsterdam Open Boat Canal Cruise - Local live guide with
              bar on board
            </span>
            <div className="Rating">
              <Star style={{ color: "yellow" }} />{" "}
              <Star style={{ color: "yellow" }} /> <Star /> <Star />
              <span>534</span>
            </div>
            <span className="IntersetText">from $20 per adult</span>
          </div>
          <div className="Experience">
            <img className="ExperienceImg" src={PF + "/places/4.jpg"} alt="" />
            <span className="ExperienceText">
              Tour of North Shore & Sightseeing
            </span>
            <div className="Rating">
              <Star style={{ color: "yellow" }} />{" "}
              <Star style={{ color: "yellow" }} /> <Star /> <Star />
              <span>534</span>
            </div>
            <span className="IntersetText">from $20 per adult</span>
          </div>
          <div className="Experience">
            <img className="ExperienceImg" src={PF + "/places/1.jpg"} alt="" />
            <span className="ExperienceText">
              Aruba Natural Pool and Indian Cave Jeep Safari
            </span>
            <div className="Rating">
              <Star style={{ color: "yellow" }} />{" "}
              <Star style={{ color: "yellow" }} /> <Star /> <Star />
              <span>534</span>
            </div>
            <span className="IntersetText">from $20 per adult</span>
          </div>
        </div>

        <h4 className="rightbarTitle">Online Travel Guiders</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        {user.username !== currentUser.username && (
          <button className="rightbarFollowButton" onClick={handleClick}>
            {followed ? "Unfollow" : "Follow"}
            {followed ? <Remove /> : <Add />}
          </button>
        )}
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">{user.city}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">{user.from}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">
              {user.relationship === 1
                ? "Single"
                : user.relationship === 1
                ? "Married"
                : "-"}
            </span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          {friends.map((friend) => (
            <Link
              to={"/profile/" + friend.username}
              style={{ textDecoration: "none" }}
            >
              <div className="rightbarFollowing">
                <img
                  src={
                    friend.profilePicture
                      ? PF + friend.profilePicture
                      : PF + "person/avatar.png"
                  }
                  alt=""
                  className="rightbarFollowingImg"
                />
                <span className="rightbarFollowingName">{friend.username}</span>
              </div>
            </Link>
          ))}
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {user ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
