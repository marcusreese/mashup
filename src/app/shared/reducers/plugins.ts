import { ActionReducer, Action } from '@ngrx/store';
import * as R from 'ramda';

export const ADD_PLUGIN = 'ADD_PLUGIN';
export const TOGGLE_PLUGIN = 'TOGGLE_PLUGIN';

const initialConfig = [
  {
    pluginTitle: 'Plugins',
    pluginComponentName: 'plugins-manager',
    dragHandle: '.title', // not working yet
    isBoxVisible: false,
    config: {
      'col': 1,
      'row': 5,
      'sizex': 1,
      'sizey': 1
    }
  },
  {
    pluginTitle: 'Map',
    pluginComponentName: 'map',
    dragHandle: '.title', // not working yet
    isBoxVisible: true,
    config: {
      'col': 1,
      'row': 1,
      'sizex': 3,
      'sizey': 4
    }
  },
  {
    pluginTitle: 'HLR',
    pluginComponentName: 'hlr',
    dragHandle: '.title', // not working yet
    isBoxVisible: true,
    config: {
      'col': 4,
      'row': 1,
      'sizex': 3,
      'sizey': 4
    }
  }
];

export const pluginsReducer: ActionReducer<Array<any>> = (state: any = initialConfig, action: Action) => {
  switch (action.type) {
    case TOGGLE_PLUGIN:
      const rightPluginName = R.eqProps('pluginComponentName', action.payload);
      const toggleIsBoxVisible = R.evolve({ isBoxVisible: R.not });
      const toggleIfClicked = R.when(rightPluginName, toggleIsBoxVisible);
      const findAndToggleClicked = R.map(toggleIfClicked);
      return findAndToggleClicked(state);
    case ADD_PLUGIN:
      return state.concat([action.payload]);
    default:
      return state;
  }
};



// let newState = state.map((obj) => {
// if (obj && obj.pluginComponentName === action.payload.pluginComponentName) {
//
//   obj.isBoxVisible = !obj.isBoxVisible;
// ;
// }
