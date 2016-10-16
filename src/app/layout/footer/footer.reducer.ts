import { ActionReducer, Action } from '@ngrx/store';

export const TOGGLE_FOOTER_SIZE = 'TOGGLE_FOOTER_SIZE';

export const footerReducer: ActionReducer<boolean> = (state = false, action: Action) => {
  switch (action.type) {
    case TOGGLE_FOOTER_SIZE:
      console.log('from', state, 'to', !!state);
      return !!state;
    default:
      return state;
  }
};
