import {
  GET_CONTACTS_SUCCESS,
  GET_CONTACTS_LOADING,
  GET_CONTACTS_FAILED,
  EDIT_CONTACT,
} from '../constants'

export const getContacts = () => (dispatch) => {
  dispatch({ type: GET_CONTACTS_LOADING })
  fetch('https://demo.sibers.com/users')
    .then((res) => res.json())
    .then((data) => {
      dispatch({ type: GET_CONTACTS_SUCCESS, data })
    })
    .catch(() => {
      dispatch({ type: GET_CONTACTS_FAILED, error: 'error load CONTACTS' })
    })
}

export const editContact = (data) => ({ type: EDIT_CONTACT, data })
