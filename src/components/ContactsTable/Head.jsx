import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import {
  TableCellTablet,
  TableCellMobileM,
} from './styled'

const Head = () => (
  <TableHead>
    <TableRow>
      <TableCell align="left">Name</TableCell>
      <TableCellMobileM align="left">Phone</TableCellMobileM>
      <TableCellTablet align="left">Address</TableCellTablet>
      <TableCell align="center">Detailed Info</TableCell>
      <TableCell align="center">Like</TableCell>
    </TableRow>
  </TableHead>
)

export default Head
