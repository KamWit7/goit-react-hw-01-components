import React from "react"
import Profile from "./Profile"
import Stats from "./Stats"
import user from "./user.json"

const Ex1 = () => {
  return (
    <>
      <Profile userInfo={user} />
      <Stats stats={user.stats} />
    </>
  )
}

export default Ex1
