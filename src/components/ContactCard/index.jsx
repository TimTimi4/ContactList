import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import styled from 'styled-components'
import ModalForm from '../ModalForm'
import Like from '../Icons/Like'

const Wrapper = styled(CardContent)`
  position: relative;
`

const FieldName = styled.span`
  color: ${({ theme }) => theme.colors.secondaryText};
`
const StyledLikeIcon = styled(Like)`
  color: ${({ theme, $favorite }) => ($favorite ? theme.colors.activeIcon : theme.colors.unactiveIcon)};
  position: absolute;
  top: 30px;
  right: 30px;
`

const ContactCard = ({ contact }) => (
  <Card sx={{ minWidth: 275 }}>
    <Wrapper>
      <Typography sx={{ mb: 1.5 }}>
        <FieldName>Name: </FieldName>{contact.name}
      </Typography>
      {/* <Typography sx={{ mb: 1.5 }}>
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
      </Typography> */}
      <StyledLikeIcon $favorite={contact.favorite} />
    </Wrapper>
    <CardActions>
      <ModalForm contact={contact} />
    </CardActions>
  </Card>
)

export default ContactCard
