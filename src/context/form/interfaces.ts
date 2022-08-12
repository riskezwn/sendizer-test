import { Form } from '../../interfaces/form';

export interface FormContextProps {
  forms: Form[];
  loadForms: () => Promise<void>;
}

export type FormActionType = { type: '[FORM] Get all forms'; payload: Form[] };

export interface FormState {
  forms: Form[];
}
