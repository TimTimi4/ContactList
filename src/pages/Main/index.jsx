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

  const groupeContacts = (arr) => {
    const group = {}
    arr.forEach((el) => {
      const letter = el.name[0].toLowerCase()
      group[letter] = group[letter] ? group[letter].concat(el) : [el]
    })
    return Object.keys(group).map((letter) => ({
      letter, list: group[letter].sort((a, b) => (a.name > b.name ? 1 : -1)),
    }))
  }

  console.log(groupeContacts(contacts))

  return (
    <Container>
      <ContactsTable groups={groupeContacts(contacts)} />
    </Container>
  )
}

export default Main
