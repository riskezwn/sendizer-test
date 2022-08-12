import FormType from './formTypes';

export interface Form {
  type: 'FORM';
  name: string;
  id_form: number;
  method: 'POST' | 'GET';
  action: string;
  validate: boolean;
  fields: FieldGroup[];
}

export interface FieldGroup {
  label: string;
  type: FormType;
  fields: Field[];
}

export interface Field {
  label: string;
  name: string;
  type: FormType;
  place_holder: string;
  fields?: Field[];
  field: Field[];
  place_holder_key: string;
  place_holder_value: string;
}
