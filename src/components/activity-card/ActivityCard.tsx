import styles from "./styles.module.css"

type TActivityCard = {
  activityCard: {
    value: string;
    description: string;
  }
}
const ActivityCard = ({activityCard}:TActivityCard) => {
  return (<>
    <div className={styles.activity}>
      <h4 className={styles.accentColor}>{activityCard.value}</h4>
      <p>{activityCard.description}</p>
    </div>
  </>)
}

export default ActivityCard