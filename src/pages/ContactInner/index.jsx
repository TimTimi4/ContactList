import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Container from '../../components/Container'

const ContactInner = ({ match }) => {
  const contacts = useSelector((state) => state.contacts)

  const contact = contacts.contacts.find((c) => c.id === match.params.contactId)
  if (!contact) return <Redirect to="/404" />
  const { name } = contact
  return (
    <Container>
      {name}
    </Container>
  )
}

export default ContactInner
