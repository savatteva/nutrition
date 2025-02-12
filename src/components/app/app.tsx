import { Route, Routes } from "react-router"
import styles from "./App.module.css"
import { CalculatorPage, MainPage, RecipesPage, TrainingPage } from "../../pages"
import { Header } from "../header/header"

const App = () => {
  return (
  <div className={styles.container}>
    <Header />

    <Routes>
      <Route path="/" element={<MainPage />}/>
      <Route path="/calculator" element={<CalculatorPage />}/>
      <Route path="/recipes" element={<RecipesPage />} />
      <Route path="/training" element={<TrainingPage />} />
    </Routes>
  </div>
  )
}

export default App