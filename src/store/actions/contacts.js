export const getContacts = () => (dispatch) => {
  dispatch({ type: 'GET_CONTACTS_LOADING' })
  fetch('https://demo.sibers.com/users')
    .then((res) => res.json())
    .then((data) => {
      dispatch({ type: 'GET_CONTACTS_SUCCESS', data })
    })
    .catch(() => {
      dispatch({ type: 'GET_CONTACTS_FAILED', error: 'error load CONTACTS' })
    })
}
