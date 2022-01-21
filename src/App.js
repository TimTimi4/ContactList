import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Theme from './styles/theme'
import Header from './components/Header'
import ContactsTable from './pages/ContactsTable'
import ContactInner from './pages/ContactInner'

const App = () => (
  <Theme>
    <Header logo="Contact List" title="Contacts" />
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<ContactsTable />} />
        <Route path="/:id" element={<ContactInner />} />
      </Routes>
    </BrowserRouter>
  </Theme>
)

export default App
