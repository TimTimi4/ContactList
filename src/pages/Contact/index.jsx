import { useSelector } from 'react-redux'
import { Navigate, useParams } from 'react-router-dom'
import Container from '../../components/Container'
import ContactCard from '../../components/ContactCard'

const Contact = () => {
  const contacts = useSelector((state) => state.contacts)

  const { id } = useParams()
  const contact = contacts.contacts.find((p) => p.id === Number(id))

  if (!contact) return <Navigate to="/404" />
  return (
    <Container>
      <ContactCard contact={contact} />
    </Container>
  )
}

export default Contact
