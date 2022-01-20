const initalStatuses = {
  success: false,
  loading: false,
  failed: false,
  error: '',
}

const initialState = {
  contacts: [],
  getСontacts: initalStatuses,
  createContact: initalStatuses,
  editContact: initalStatuses,
  deleteContact: initalStatuses,
}

// eslint-disable-next-line
function reducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_CONTACTS_SUCCESS':
      return {
        ...state,
        contacts: action.data,
        getСontacts: {
          ...initalStatuses,
          success: true,
        },
      }
    case 'GET_CONTACTS_LOADING':
      return {
        ...state,
        getСontacts: {
          ...initalStatuses,
          loading: true,
        },
      }
    case 'GET_CONTACTS_FAILED':
      return {
        ...state,
        getСontacts: {
          ...initalStatuses,
          failed: true,
          error: action.error,
        },
      }

    case 'CREATE_CONTACT_SUCCESS':
      return {
        ...state,
        createContact: {
          ...initalStatuses,
          success: true,
        },
      }
    case 'CREATE_CONTACT_LOADING':
      return {
        ...state,
        createContact: {
          ...initalStatuses,
          loading: true,
        },
      }
    case 'CREATE_CONTACT_FAILED':
      return {
        ...state,
        createContact: {
          ...initalStatuses,
          failed: true,
          error: action.error,
        },
      }

    case 'EDIT_CONTACT_SUCCESS':
      return {
        ...state,
        editContact: {
          ...initalStatuses,
          success: true,
        },
      }
    case 'EDIT_CONTACT_LOADING':
      return {
        ...state,
        editContact: {
          ...initalStatuses,
          loading: true,
        },
      }
    case 'EDIT_CONTACT_FAILED':
      return {
        ...state,
        editContact: {
          ...initalStatuses,
          failed: true,
          error: action.error,
        },
      }

    case 'DELETE_CONTACT_SUCCESS':
      return {
        ...state,
        deleteContact: {
          ...initalStatuses,
          success: true,
        },
      }
    case 'DELETE_CONTACT_LOADING':
      return {
        ...state,
        deleteContact: {
          ...initalStatuses,
          loading: true,
        },
      }
    case 'DELETE_CONTACT_FAILED':
      return {
        ...state,
        deleteContact: {
          ...initalStatuses,
          failed: true,
          error: action.error,
        },
      }
    default:
      return state
  }
}

export default reducer
