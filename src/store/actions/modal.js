export const initModalForm = (modalName, form) => ({
  type: 'INIT_MODAL_FORM',
  modalName,
  form,
})

export const changeModalForm = (modalName, fieldName, value) => ({
  type: 'MODAL_CHANGE_FORM_FIELD',
  modalName,
  fieldName,
  value,
})
