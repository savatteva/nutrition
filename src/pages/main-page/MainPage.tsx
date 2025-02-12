import styles from "./styles.module.css"

export const MainPage = () => {
  return (
    <main className={styles.main}>
      <section className={styles.background}>
        <div className={styles.overlay}></div>
        <h1 className={styles.mainHeading}>вы когда-нибудь мечтали стать лучшей версией себя?</h1>
      </section>
    </main>
  )
}