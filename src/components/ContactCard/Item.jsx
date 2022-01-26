import Typography from '@mui/material/Typography'
import {
  FieldName,
} from './styled'

const CardLine = ({ title, children }) => (
  <Typography sx={{ mb: 1.5 }}>
    <FieldName>{title}: </FieldName>{children}
  </Typography>
)

export default CardLine
