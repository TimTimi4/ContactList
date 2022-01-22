import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ContactsRow from '../../components/ContactsRow'
import Container from '../../components/Container'
import { getContacts } from '../../store/actions/contacts'

const ContactsTable = () => {
  const dispatch = useDispatch()
  const contacts = useSelector((state) => state.contacts.contacts)

  useEffect(() => {
    if (contacts.length === 0) {
      dispatch(getContacts())
    }
  }, [contacts.length, dispatch])

  return (
    <Container>
      <ContactsRow contacts={contacts.sort((a, b) => (a.name > b.name ? 1 : -1))} />
    </Container>
  )
}

export default ContactsTable
