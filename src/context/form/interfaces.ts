import { Form } from '../../interfaces/form';

export interface FormContextProps {
  forms: Form[];
  activeForm: Form | undefined;
  loadForms: () => Promise<void>;
  setActiveForm: (id: number) => void;
}

export type FormActionType =
  | { type: '[FORM] Get all forms'; payload: Form[] }
  | { type: '[FORM] Set active form'; payload: number };

export interface FormState {
  forms: Form[];
  activeForm: Form | undefined;
}
