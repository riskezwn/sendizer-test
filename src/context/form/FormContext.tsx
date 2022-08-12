import { createContext } from 'react';
import { FormContextProps } from './interfaces';

const FormContext = createContext({} as FormContextProps);

export default FormContext;
