export interface UIContextProps {
  isDialogOpen: boolean;
  toggleDialog: () => void;
}

export type UIActionType = { type: '[UI] Toggle Dialog' };

export interface UIState {
  isDialogOpen: boolean;
}
