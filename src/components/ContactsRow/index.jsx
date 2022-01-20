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

const StyledEditIcon = styled(Edit)`
  color: ${({ theme }) => theme.colors.unactiveIcon};
  cursor: pointer;
`
const StyledTrashIcon = styled(Trash)`
  color: ${({ theme }) => theme.colors.unactiveIcon};
  cursor: pointer;
`

const BooksRow = ({ contacts }) => (
  <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="a dense table">
      <TableHead>
        <TableRow>
          <TableCell align="left">Book Name</TableCell>
          <TableCell align="left">Author</TableCell>
          <TableCell align="center">Like</TableCell>
          <TableCell align="center">Edit</TableCell>
          <TableCell align="center">Delete</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {contacts.map((person) => (
          <TableRow
            key={person.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell align="left">{person.name}</TableCell>
            <TableCell align="center"><StyledEditIcon /></TableCell>
            <TableCell align="center"><StyledTrashIcon /></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
)

export default BooksRow
