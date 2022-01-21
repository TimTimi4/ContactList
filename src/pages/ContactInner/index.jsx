import { useSelector } from 'react-redux'
import { Navigate, useParams } from 'react-router-dom'
import Container from '../../components/Container'

const ContactInner = () => {
  const contacts = useSelector((state) => state.contacts)

  const { id } = useParams()
  const contact = contacts.contacts.find((p) => p.id === Number(id))
  if (!contact) return <Navigate to="/404" />
  return (
    <Container>
      {contact.name}
    </Container>
  )
}

export default ContactInner
