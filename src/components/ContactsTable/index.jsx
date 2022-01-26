import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { useSelector, useDispatch } from 'react-redux'
import Info from '../Icons/Info'
import { editContact } from '../../store/actions/contacts'
import {
  StyledLikeIcon,
  StyledInfoIcon,
  StyledTable,
  TableCellTablet,
  TableCellMobileM,
} from './styled'

const ContactsTable = ({ groups }) => {
  const dispatch = useDispatch()
  const contacts = useSelector((state) => state.contacts.contacts)

  const handleClickLikeIcon = (contact) => {
    dispatch(editContact(contacts.map((c) => {
      if (contact.id === c.id) return { ...contact, favorite: !contact.favorite }
      return c
    })))
  }

  return (
    <TableContainer component={Paper}>

      {groups.map((group) => (
        <StyledTable sx={{ minWidth: 650 }} aria-label="caption table" key={group.letter}>
          <caption style={{ captionSide: 'top', fontSize: '20px' }}>{group.letter.toUpperCase()}</caption>
          <TableHead>
            <TableRow>
              <TableCell align="left">Name</TableCell>
              <TableCellMobileM align="left">Phone</TableCellMobileM>
              <TableCellTablet align="left">Address</TableCellTablet>
              <TableCell align="center">Detailed Info</TableCell>
              <TableCell align="center">Like</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {group.list.map((contact) => (
              <TableRow
                key={contact.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="left">{contact.name}</TableCell>
                <TableCellMobileM align="left">{contact.phone}</TableCellMobileM>
                <TableCellTablet align="left">{contact.address.city}, {contact.address.country}</TableCellTablet>
                <TableCell align="center">
                  <StyledInfoIcon to={`/contacts/${contact.id}`}>
                    <Info />
                  </StyledInfoIcon>
                </TableCell>
                <TableCell align="center">
                  <StyledLikeIcon
                    $favorite={contact.favorite}
                    onClick={() => handleClickLikeIcon(contact)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </StyledTable>
      ))}
    </TableContainer>
  )
}

export default ContactsTable
