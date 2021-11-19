import React from "react"
import Profile from "./Profile"
import Stats from "./Stats"
import user from "./user.json"

function Ex1() {
  /* Ex.1 Start */
  const { username, tag, location, avatar } = user
  const { followers, views, likes } = user.stats
  /* Ex.1 End */
  return (
    <>
      {/* Ex.1 Start */}
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
      />
      <Stats followers={followers} views={views} likes={likes} />
      {/* Ex.1 End */}
    </>
  )
}

export default Ex1
