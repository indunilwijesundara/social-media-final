import "./guiders.css";

export default function Guiders({user}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <li className="sidebarFriend">
      <img className="sidebarFriendImg" src={user.profilePicture ? PF+user.profilePicture : PF + "person/avatar.jpg"} alt="" />
      <span className="sidebarFriendName">{user.username}</span>
    </li>
  );
}