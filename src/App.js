import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Theme from './styles/theme'
import Header from './components/Header'
import Container from './components/Container'
import { getContacts } from './store/actions/contacts'

const App = () => {
  const dispatch = useDispatch()
  const contacts = useSelector((state) => state.contacts)

  useEffect(() => {
    dispatch(getContacts())
  }, [])

  console.log(contacts)
  return (
    <Theme>
      <Header logo="Contact List" title="Contacts" />
      <Container>
        <div>hi</div>
      </Container>
    </Theme>
  )
}

export default App
