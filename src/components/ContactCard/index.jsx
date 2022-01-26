import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import Typography from '@mui/material/Typography'
import ModalForm from '../ModalForm'
import {
  Wrapper,
  FieldName,
  StyledLikeIcon,
} from './styled'

const ContactCard = ({ contact }) => (
  <Card sx={{ minWidth: 275 }}>
    <Wrapper>
      <Typography sx={{ mb: 1.5 }}>
        <FieldName>Name: </FieldName>{contact.name}
      </Typography>
      <Typography sx={{ mb: 1.5 }}>
        <FieldName>Address: </FieldName>
        {contact.address.city}, {contact.address.country}, {contact.address.streetC}
      </Typography>
      <Typography sx={{ mb: 1.5 }}>
        <FieldName>Phone: </FieldName> {contact.phone}
      </Typography>
      <Typography sx={{ mb: 1.5 }}>
        <FieldName>Company: </FieldName> {contact.company.name}, {contact.company.bs}
      </Typography>
      <Typography sx={{ mb: 1.5 }}>
        <FieldName>e-mail: </FieldName> {contact.email}
      </Typography>
      <Typography sx={{ mb: 1.5 }}>
        <FieldName>User Name: </FieldName> {contact.username}
      </Typography>
      <StyledLikeIcon $favorite={contact.favorite} />
    </Wrapper>
    <CardActions>
      <ModalForm contact={contact} />
    </CardActions>
  </Card>
)

export default ContactCard
