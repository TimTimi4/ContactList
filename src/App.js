import { Route, BrowserRouter, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Theme from './styles/theme'
import Header from './components/Header'
import Main from './pages/Main'
import Contact from './pages/Contact'
import NotFoundPage from './components/NotFoundPage'
import CircularUnderLoad from './components/Loader'

const App = () => {
  const { failed, loading } = useSelector((state) => state.contacts.getСontacts)
  return (
    <Theme>
      <Header logo="Contact List" title="Contacts" />
      {loading && <CircularUnderLoad /> }
      { failed && <NotFoundPage /> }
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/contacts/:id" element={<Contact />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </Theme>
  )
}
export default App
