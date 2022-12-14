import { Form, FormValue } from '../../interfaces/form';

export interface FormContextProps {
  forms: Form[];
  activeForm: Form | undefined;
  formValues: FormValue[];
  loadForms: () => Promise<void>;
  setActiveForm: (id: number) => void;
  addFormValue: (key: string, value: string) => void;
  removeFormValue: (key: string) => void;
  clearFormValues: () => void;
}

export type FormActionType =
  | { type: '[FORM] Get all forms'; payload: Form[] }
  | { type: '[FORM] Set active form'; payload: number }
  | { type: '[FORM] Add form value'; payload: FormValue[] }
  | { type: '[FORM] Remove form value'; payload: FormValue[] }
  | { type: '[FORM] Clear form values' };

export interface FormState {
  forms: Form[];
  formValues: FormValue[];
  activeForm: Form | undefined;
}
