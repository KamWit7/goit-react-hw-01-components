import styles, {
  Title,
  Statlist,
  Item,
  Label,
  Precentage,
} from "./css/Statistics.module.css"

const Stats = ({ data }) => {
  return (
    <ul className={Statlist}>
      {data.map(({ id, label, percentage }) => {
        return (
          <li
            key={id}
            className={Item}
            style={{
              background: `linear-gradient(35deg,${randomHexColor()} 20%, ${randomHexColor()} 80%)`,
            }}
          >
            <span className={Label}>{label}</span>
            <span className={Precentage}>{percentage}%</span>
          </li>
        )
      })}
    </ul>
  )
}

const Statistics = ({ title = "", data }) => {
  return (
    <section className={styles.Statistics}>
      {title !== "" && <h2 className={Title}>{title}</h2>}
      <Stats data={data} />
    </section>
  )
}

export default Statistics

const randomHexColor = () =>
  "#" + (((1 << 24) * Math.random()) | 0).toString(16)
