import { FormActionType, FormState } from './interfaces';

const formReducer = (state: FormState, action: FormActionType): FormState => {
  switch (action.type) {
    case '[FORM] Get all forms':
      return {
        ...state,
        forms: action.payload,
      };
    default:
      return state;
  }
};

export default formReducer;
