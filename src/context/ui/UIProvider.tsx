import { ReactNode, useMemo, useReducer } from 'react';
import UIContext from './UIContext';
import uiReducer from './uiReducer';
import { UIState } from './interfaces';

interface Props {
  children: ReactNode;
}

const UI_INITIAL_STATE: UIState = {
  isDialogOpen: false,
  isModalHistoryOpen: false,
};

function UIProvider({ children }: Props) {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const toggleDialog = () => {
    dispatch({ type: '[UI] Toggle Dialog' });
  };

  const uiProviderValue = useMemo(() => ({ ...state, toggleDialog }), [state]);

  return <UIContext.Provider value={uiProviderValue}>{children}</UIContext.Provider>;
}

export default UIProvider;
