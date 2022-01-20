import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Theme from './styles/theme'
import Header from './components/Header'
import Container from './components/Container'
import { getContacts } from './store/actions/contacts'
import ContactsRow from './components/ContactsRow'

const App = () => {
  const dispatch = useDispatch()
  const contacts = useSelector((state) => state.contacts)

  useEffect(() => {
    dispatch(getContacts())
  }, [])

  console.log(contacts.contacts)
  return (
    <Theme>
      <Header logo="Contact List" title="Contacts" />
      <Container>
        <ContactsRow contacts={contacts.contacts.sort((a, b) => (a.name > b.name ? 1 : -1))} />
      </Container>
    </Theme>
  )
}

export default App
