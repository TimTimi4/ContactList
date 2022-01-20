import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import styled from 'styled-components'
import Trash from '../Icons/Trash'
import Edit from '../Icons/Edit'
import Like from '../Icons/Like'

const StyledLikeIcon = styled(Like)`
  color: ${({ theme, $favorite }) => ($favorite ? theme.colors.activeIcon : theme.colors.unactiveIcon)};
  cursor: pointer;
`
const StyledEditIcon = styled(Edit)`
  color: ${({ theme }) => theme.colors.unactiveIcon};
  cursor: pointer;
`
const StyledTrashIcon = styled(Trash)`
  color: ${({ theme }) => theme.colors.unactiveIcon};
  cursor: pointer;
`

const Avatar = styled(TableCell)`
  /* background-image: url(${({ avatar }) => (avatar)}); */
`

const ContactsRow = ({ contacts }) => (
  <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="a dense table">
      <TableHead>
        <TableRow>
          <TableCell align="center" />
          <TableCell align="left">Name</TableCell>
          <TableCell align="left">Phone</TableCell>
          <TableCell align="left">Address</TableCell>
          <TableCell align="center">Like</TableCell>
          <TableCell align="center">Edit</TableCell>
          <TableCell align="center">Delete</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {contacts.map((contact) => (
          <TableRow
            key={contact.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <Avatar align="center" avatar={contact.avatar} />
            <TableCell align="left">{contact.name}</TableCell>
            <TableCell align="left">{contact.phone}</TableCell>
            <TableCell align="left">{contact.address.city}, {contact.address.country}</TableCell>
            <TableCell align="center"><StyledLikeIcon $favorite={contact.favorite} /></TableCell>
            <TableCell align="center"><StyledEditIcon /></TableCell>
            <TableCell align="center"><StyledTrashIcon /></TableCell>

          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
)

export default ContactsRow
