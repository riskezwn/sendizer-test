import { UIActionType, UIState } from './interfaces';

const uiReducer = (state: UIState, action: UIActionType): UIState => {
  switch (action.type) {
    case '[UI] Toggle Dialog':
      return {
        ...state,
        isDialogOpen: !state.isDialogOpen,
      };
    default:
      return state;
  }
};

export default uiReducer;
