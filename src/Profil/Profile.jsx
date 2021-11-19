import React from "react"
import {
  Avatar,
  Description,
  Name,
  Tag,
  Location,
} from "./css/Profile.module.css"

const Profile = ({ username, tag, location, avatar }) => {
  console.log(Avatar)
  return (
    <div className={Description}>
      <img src={avatar} alt={"User avatar"} className={Avatar} />
      <p className={Name}>{username}</p>
      <p className={Tag}>{tag}</p>
      <p className={Location}>{location}</p>
    </div>
  )
}

export default Profile
