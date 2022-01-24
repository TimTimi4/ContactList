import * as React from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import { useDispatch, useSelector } from 'react-redux'
import { editContact } from '../../store/actions/contacts'

const ModalForm = ({ contact }) => {
  const dispatch = useDispatch()
  const [open, setOpen] = React.useState(false)
  const [form, setForm] = React.useState({
    name: '',
  })
  const contacts = useSelector((state) => state.contacts.contacts)

  const handleClickOpen = () => {
    setOpen(true)
    setForm(contact)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value,
    })
  }

  const saveChanges = () => {
    handleClose()
    dispatch(editContact(contacts.map((c) => {
      if (contact.id === c.id) return form
      return c
    })))
  }

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Edit Contact
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Contact Info</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            label="Name"
            type="text"
            name="name"
            value={form.name}
            fullWidth
            variant="standard"
            onChange={handleChange}
          />
          {/* <TextField
            margin="dense"
            id="country"
            label="Country"
            name="country"
            type="text"
            variant="standard"
            sx={{ width: '30%', marginRight: '10px' }}
            onChange={handleChangeModalForm}
          />
          <TextField
            margin="dense"
            id="city"
            label="City"
            name="city"
            type="text"
            variant="standard"
            sx={{ width: '30%' }}
            onChange={handleChangeModalForm}
          />
          <TextField
            margin="dense"
            id="streetC"
            label="Street"
            name="streetC"
            type="text"
            variant="standard"
            sx={{ width: '36%', marginLeft: '10px' }}
            handleChangeModalForm={handleChangeModalForm}
          />
          <TextField
            margin="dense"
            id="phone"
            name="phone"
            label="Phone"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleChangeModalForm}
          />
          <TextField
            margin="dense"
            id="companyname"
            label="Company Name"
            name="name"
            type="text"
            variant="standard"
            sx={{ width: '40%', marginRight: '10px' }}
            onChange={handleChangeModalForm}
          />
          <TextField
            margin="dense"
            id="bs"
            label="Description"
            name="bs"
            type="text"
            variant="standard"
            sx={{ width: '58%' }}
            onChange={handleChangeModalForm}
          />
          <TextField
            margin="dense"
            id="email"
            label="e-mail"
            type="email"
            name="email"
            fullWidth
            variant="standard"
            onChange={handleChangeModalForm}
          />
          <TextField
            margin="dense"
            id="username"
            label="User Name"
            name="username"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleChangeModalForm}
          /> */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" onClick={saveChanges}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default ModalForm
