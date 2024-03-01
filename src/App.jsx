import './App.css'
import AppHeader from './components/AppHeader/AppHeader'
import BookContextProvider from './contexts/BookContext'
import PageRoutes from './routes/PageRoutes'

function App() {
  

  return (
    <BookContextProvider>
      <AppHeader/>
      <PageRoutes/>
    </BookContextProvider>
  )
}

export default App
