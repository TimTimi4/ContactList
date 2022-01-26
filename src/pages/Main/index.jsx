import { useCallback, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ContactsTable from '../../components/ContactsTable'
import Container from '../../components/Container'
import { getContacts } from '../../store/actions/contacts'

const Main = () => {
  const dispatch = useDispatch()
  const contacts = useSelector((state) => state.contacts.contacts)

  // if contacts array is empty, get contacts from server
  useEffect(() => {
    if (contacts.length === 0) {
      dispatch(getContacts())
    }
  }, [contacts.length, dispatch])

  // function to group a contact by letter
  const groupeContacts = useCallback((arr) => {
    /*
    create object where key is main letter, value is grouped contacts.
    Use object because keys is unique and they cannot be duplicate
    */
    const group = {}
    arr.forEach((el) => {
      // get first letter of name
      const letter = el.name[0].toLowerCase()
      // assign contact-value to letter-key
      group[letter] = group[letter] ? group[letter].concat(el) : [el]
    })
    // create array of objects for easy rendering inside component
    return Object.keys(group).map((letter) => ({
      letter, list: group[letter].sort((a, b) => (a.name > b.name ? 1 : -1)),
    }))
  }, [])

  return (
    <Container>
      <ContactsTable groups={groupeContacts(contacts)} contacts={contacts} />
    </Container>
  )
}

export default Main
