import { Calculator } from "../../components"
import ActivityCard from "../../components/activity-card/ActivityCard"
import styles from "./styles.module.css"

const activityCards = [{
  value: "1.200",
  description: "мало подвижные люди, тренировок мало или их вовсе нет"
},
{
  value: "1.375",
  description: "люди с низкой активностью, легкие тренировки 1-3 раза в неделю или в виде эквивалента другой активности."
},
{
  value: "1.550",
  description: "умеренно активные люди: физическая работа средней тяжести или регулярные тренировки 3-5 дней в неделю."
},
{
  value: "1.725",
  description: "очень активные люди: физическая работа полный день или интенсивные тренировки 6-7 раз в неделю."
},
{
  value: "1.925",
  description: "предельно активные люди: тяжелая физическая работа и интенсивные тренировки/занятия спортом."
}]

export const CalculatorPage = () => {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <div>
          <h2 className={styles.heading}>расчет калорийности</h2>
          <Calculator />
        </div>
        <div className="d-flex flex-column gap-2">
          <h3 className={styles.heading}>памятка по индексам активности</h3>
          {activityCards.map(item => {
            return <ActivityCard activityCard={item} />
          })}
        </div>
      </section>
    </main>
  )
}