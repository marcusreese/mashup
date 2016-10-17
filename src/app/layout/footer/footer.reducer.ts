import { ActionReducer, Action } from '@ngrx/store';

export const TOGGLE_FOOTER_SIZE = 'TOGGLE_FOOTER_SIZE';

export const footerReducer: ActionReducer<boolean> = (state = false, action: Action) => {
  switch (action.type) {
    case TOGGLE_FOOTER_SIZE:
      return !state;
    default:
      return state;
  }
};
