import { Route, Routes } from "react-router-dom"
import route from "./routes.json"
import Home from "../pages/Home"
import Book from "../pages/Book"

const PageRoutes = () => {
  return (
    <Routes>
        <Route path={route.HOME} element={<Home/>}></Route>
        <Route path="/book/:id" element={<Book/>}></Route>
    </Routes>
  )
}

export default PageRoutes