import { FormValue } from '../interfaces/form';

export const loadAllForms = async () => {
  try {
    const response = await fetch('/data/operator-action-configurations.json');
    const forms = await response.json();

    return forms;
  } catch (error) {
    throw new Error();
  }
};

export const saveFormData = (formId: number, formValues: FormValue[]) => {
  const date = new Date().getTime();
  const formHistory = JSON.parse(localStorage.getItem('formHistory') ?? '[]');

  const newFormValue = {
    formId,
    date,
    formValues,
  };

  const newFormHistory = [...formHistory, newFormValue];
  localStorage.setItem('formHistory', JSON.stringify(newFormHistory));
};

export default loadAllForms;
