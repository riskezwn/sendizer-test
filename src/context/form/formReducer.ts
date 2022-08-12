import { FormActionType, FormState } from './interfaces';

const formReducer = (state: FormState, action: FormActionType): FormState => {
  switch (action.type) {
    case '[FORM] Get all forms':
      return {
        ...state,
        forms: action.payload,
      };
    case '[FORM] Set active form':
      return {
        ...state,
        activeForm: state.forms.find((form) => form.id_form === action.payload),
      };
    case '[FORM] Add form value':
      return {
        ...state,
        formValues: action.payload,
      };
    case '[FORM] Remove form value':
      return {
        ...state,
        formValues: action.payload,
      };
    case '[FORM] Clear form values':
      return {
        ...state,
        formValues: [],
      };
    default:
      return state;
  }
};

export default formReducer;
