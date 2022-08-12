import { ReactNode, useMemo, useReducer } from 'react';
import loadAllForms from '../../helpers/forms';
import { Form } from '../../interfaces/form';
import FormContext from './FormContext';
import formReducer from './formReducer';
import { FormState } from './interfaces';

interface Props {
  children: ReactNode;
}

const FORM_INITIAL_STATE: FormState = {
  forms: [],
  activeForm: {} as Form,
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

  const formProviderValue = useMemo(() => ({ ...state, loadForms, setActiveForm }), [state]);

  return <FormContext.Provider value={formProviderValue}>{children}</FormContext.Provider>;
}

export default FormProvider;
