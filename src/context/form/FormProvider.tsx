/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-param-reassign */
import { ReactNode, useMemo, useReducer } from 'react';
import { loadAllForms } from '../../helpers/forms';
import { Form, FormValue } from '../../interfaces/form';
import FormContext from './FormContext';
import formReducer from './formReducer';
import { FormState } from './interfaces';

interface Props {
  children: ReactNode;
}

const FORM_INITIAL_STATE: FormState = {
  forms: [],
  activeForm: {} as Form,
  formValues: [] as FormValue[],
};

function FormProvider({ children }: Props) {
  const [state, dispatch] = useReducer(formReducer, FORM_INITIAL_STATE);

  const loadForms = async () => {
    const forms = await loadAllForms();
    dispatch({
      type: '[FORM] Get all forms',
      payload: forms,
    });
  };

  const setActiveForm = (id: number) => {
    dispatch({
      type: '[FORM] Set active form',
      payload: id,
    });
  };

  const addFormValue = (key: string, value: string) => {
    let { formValues } = state;
    const keyAlreadyExists = formValues.find((fvalue) => key in fvalue);

    if (keyAlreadyExists) {
      formValues.map((formValue) => {
        if (key in formValue) {
          Object.keys(formValue).forEach((keyObj) => {
            formValue[keyObj] = value;
          });
        }

        return formValue;
      });
    } else {
      formValues = [...formValues, { [key]: value }];
    }

    dispatch({
      type: '[FORM] Add form value',
      payload: formValues,
    });
  };

  const removeFormValue = (key: string) => {
    let { formValues } = state;
    formValues = formValues.filter((fvalue) => !(key in fvalue));

    dispatch({
      type: '[FORM] Remove form value',
      payload: formValues,
    });
  };

  const clearFormValues = () => {
    dispatch({
      type: '[FORM] Clear form values',
    });
  };

  const formProviderValue = useMemo(
    () => ({ ...state, loadForms, setActiveForm, addFormValue, clearFormValues, removeFormValue }),
    [state],
  );

  return <FormContext.Provider value={formProviderValue}>{children}</FormContext.Provider>;
}

export default FormProvider;
