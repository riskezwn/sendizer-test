export interface UIContextProps {
  isDialogOpen: boolean;
  isModalHistoryOpen: boolean;
  toggleDialog: () => void;
}

export type UIActionType = { type: '[UI] Toggle Dialog' };

export interface UIState {
  isDialogOpen: boolean;
  isModalHistoryOpen: boolean;
}
