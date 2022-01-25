import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import Like from '../Icons/Like'
import Info from '../Icons/Info'

const StyledLikeIcon = styled(Like)`
  color: ${({ theme, $favorite }) => ($favorite ? theme.colors.activeIcon : theme.colors.unactiveIcon)};
  cursor: pointer;
`

const StyledInfoIcon = styled(NavLink)`
  cursor: pointer;
`

const ContactsTable = ({ groups }) => {
  console.log(groups)

  return (
    <TableContainer component={Paper}>
      {groups.map((group) => (
        <Table sx={{ minWidth: 650 }} aria-label="caption table" key={group.letter}>
          <caption style={{ captionSide: 'top', fontSize: '20px' }}>{group.letter.toUpperCase()}</caption>
          <TableHead>
            <TableRow>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Phone</TableCell>
              <TableCell align="left">Address</TableCell>
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
                <TableCell align="left">{contact.phone}</TableCell>
                <TableCell align="left">{contact.address.city}, {contact.address.country}</TableCell>
                <TableCell align="center">
                  <StyledInfoIcon to={`/contacts/${contact.id}`}>
                    <Info />
                  </StyledInfoIcon>
                </TableCell>
                <TableCell align="center">
                  <StyledLikeIcon
                    $favorite={contact.favorite}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ))}
    </TableContainer>
  )
}

export default ContactsTable
