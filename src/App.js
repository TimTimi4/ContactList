import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Theme from './styles/theme'
import Header from './components/Header'
import ContactsTable from './pages/ContactsTable'
import ContactInner from './pages/ContactInner'

const App = () => (
  <Theme>
    <Header logo="Contact List" title="Contacts" />
    <BrowserRouter>
      <Switch>
        <Route path="/" component={ContactsTable} exact />
        <Route path="/:contactId" component={ContactInner} exact />
      </Switch>
    </BrowserRouter>
  </Theme>
)

export default App
