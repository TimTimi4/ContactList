import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Theme from './styles/theme'
import Header from './components/Header'
import Main from './pages/Main'
import Contact from './pages/Contact'
import NotFoundPage from './components/NotFoundPage'

const App = () => (
  <Theme>
    <Header logo="Contact List" title="Contacts" />
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/contacts/:id" element={<Contact />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  </Theme>
)

export default App
