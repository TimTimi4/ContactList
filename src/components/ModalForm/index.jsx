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
    address: {
      country: '',
      city: '',
      streetC: '',
    },
    phone: '',
    company: {
      name: '',
      bs: '',
    },
    email: '',
    username: '',
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

  const handleChangeObjectField = (e, field) => {
    const { name, value } = e.target
    setForm({
      ...form,
      [field]: {
        ...form[field],
        [name]: value,
      },
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
          <TextField
            margin="dense"
            label="Country"
            name="country"
            type="text"
            value={form.address.country}
            variant="standard"
            sx={{ width: '30%', marginRight: '10px' }}
            onChange={(e) => handleChangeObjectField(e, 'address')}
          />
          <TextField
            margin="dense"
            label="City"
            name="city"
            type="text"
            variant="standard"
            value={form.address.city}
            sx={{ width: '30%' }}
            onChange={(e) => handleChangeObjectField(e, 'address')}
          />
          <TextField
            margin="dense"
            label="Street"
            name="streetC"
            type="text"
            value={form.address.streetC}
            variant="standard"
            sx={{ width: '36%', marginLeft: '10px' }}
            onChange={(e) => handleChangeObjectField(e, 'address')}
          />
          <TextField
            margin="dense"
            name="phone"
            label="Phone"
            type="text"
            fullWidth
            variant="standard"
            value={form.phone}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            label="Company Name"
            name="name"
            type="text"
            variant="standard"
            value={form.company.name}
            sx={{ width: '40%', marginRight: '10px' }}
            onChange={(e) => handleChangeObjectField(e, 'company')}
          />
          <TextField
            margin="dense"
            label="Description"
            name="bs"
            value={form.company.bs}
            type="text"
            variant="standard"
            sx={{ width: '58%' }}
            onChange={(e) => handleChangeObjectField(e, 'company')}
          />
          <TextField
            margin="dense"
            label="e-mail"
            type="email"
            name="email"
            value={form.email}
            fullWidth
            variant="standard"
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            label="User Name"
            name="username"
            type="text"
            value={form.username}
            fullWidth
            variant="standard"
            onChange={handleChange}
          />
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
