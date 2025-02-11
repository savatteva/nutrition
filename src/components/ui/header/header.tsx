import { NavLink } from "react-router"
import styles from "./styles.module.css"

export const HeaderUI = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.menu}>
          <NavLink to={"/"}>
            <p className={styles.logo}>nutrition.</p>
          </NavLink>
        </div>

        <div className={styles.menu}>
          <NavLink to={"/calculator"}>
           <p className={styles.text}>калькулятор</p>
          </NavLink>
          <NavLink to={"/recipes"}>
           <p className={styles.text}>рецепты</p>
          </NavLink>
        </div>
      </nav>
    </header>
  )
}