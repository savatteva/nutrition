import { Route, Routes } from "react-router"
import { Header } from "../header"
import styles from "./App.module.css"
import { CalculatorPage, MainPage, RecipesPage } from "../../pages"

const App = () => {
  return (
  <div className={styles.container}>
    <Header />

    <Routes>
      <Route path="/" element={<MainPage />}/>
      <Route path="/calculator" element={<CalculatorPage />}/>
      <Route path="/recipes" element={<RecipesPage />} />
    </Routes>
  </div>
  )
}

export default App