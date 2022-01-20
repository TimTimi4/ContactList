const initialState = {
  editBook: {
    isShow: false,
    form: {
      name: '',
      phone: '',
      address: '',
      favorite: false,
    },
  },
}
// eslint-disable-next-line
function reducer(state = initialState, action) {
  switch (action.type) {
    // case 'INIT_MODAL_FORM':
    //   return {
    //     ...state,
    //     [action.modalName]: {
    //       ...state[action.modalName],
    //       form: action.form,
    //     },
    //   }
    case 'MODAL_SET_SHOW':
      return {
        ...state,
        [action.modalName]: {
          isShow: action.isShow,
          form: initialState[action.modalName].form,
        },
      }
    case 'MODAL_CHANGE_FORM_FIELD':
      return {
        ...state,
        [action.modalName]: {
          ...state[action.modalName],
          form: {
            ...state[action.modalName].form,
            [action.fieldName]: action.value,
          },
        },
      }
    default:
      return state
  }
}

export default reducer
