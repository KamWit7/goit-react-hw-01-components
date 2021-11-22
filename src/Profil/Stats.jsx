import React from "react"
import styles, { Label, Quantity } from "./css/Stats.module.css"

const ListItems = ({ statText, stat }) => {
  return (
    <li>
      <span className={Label}>{statText}</span>
      <span className={Quantity}>{stat}</span>
    </li>
  )
}

const Stats = ({ stats }) => {
  const { followers, views, likes } = stats

  return (
    <ul className={styles.Stats}>
      <ListItems statText="Followers" stat={followers} />
      <ListItems statText="Views" stat={views} />
      <ListItems statText="Likes" stat={likes} />
    </ul>
  )
}

export default Stats
