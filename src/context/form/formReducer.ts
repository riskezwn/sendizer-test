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
    default:
      return state;
  }
};

export default formReducer;
