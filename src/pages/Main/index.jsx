import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ContactsTable from '../../components/ContactsTable'
import Container from '../../components/Container'
import { getContacts } from '../../store/actions/contacts'

const Main = () => {
  const dispatch = useDispatch()
  const contacts = useSelector((state) => state.contacts.contacts)
  useEffect(() => {
    if (contacts.length === 0) {
      dispatch(getContacts())
    }
  }, [contacts.length, dispatch])

  return (
    <Container>
      <ContactsTable contacts={contacts.sort((a, b) => (a.name > b.name ? 1 : -1))} />
    </Container>
  )
}

export default Main
