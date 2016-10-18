import { ActionReducer, Action } from '@ngrx/store';

export const ADD_PLUGIN = 'ADD_PLUGIN';
export const TOGGLE_PLUGIN = 'TOGGLE_PLUGIN';

const initialConfig = [
  {
    pluginTitle: 'Plugins',
    pluginComponentName: 'plugins-manager',
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
      let newState = state.map((obj) => {
        if (obj && obj.pluginComponentName === action.payload.pluginComponentName) {
          action.payload.isBoxVisible = !obj.isBoxVisible;
          return action.payload;
        } else {
          return obj;
        }
      });
      return newState;
    case ADD_PLUGIN:
      return state.concat([action.payload]);
    default:
      return state;
  }
};
