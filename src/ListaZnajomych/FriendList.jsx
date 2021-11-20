import React from "react"
import { Item, Name, Online, Ofline } from "./css/FriendList.module.css"

const FriendListItem = ({ avatar, name, isOnline }) => {
  let status = isOnline ? Online : Ofline
  return (
    <li className={Item}>
      <span className={status}></span>
      <img src={avatar} alt="User avatar" width="48" />
      <p className={Name}>{name}</p>
    </li>
  )
}

const FriendList = ({ friends }) => {
  return (
    <ul style={{ padding: "0" }}>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        )
      })}
    </ul>
  )
}

export default FriendList
