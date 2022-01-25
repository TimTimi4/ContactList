import * as React from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import styled from 'styled-components'

const StyledCircularProgress = styled(CircularProgress)`
  position: relative;
  top: 100px;
  left: 50%;
`

const CircularUnderLoad = () => (
  <StyledCircularProgress disableShrink />
)

export default CircularUnderLoad
