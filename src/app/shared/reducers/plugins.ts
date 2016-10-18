import { ActionReducer, Action } from '@ngrx/store';

export const ADD_PLUGIN = 'ADD_PLUGIN';
export const TOGGLE_PLUGIN = 'TOGGLE_PLUGIN';

const initialConfig = [
  {
    pluginTitle: 'Plugins',
    pluginComponentName: 'plugins-manager',
    isWindowVisible: false,
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
    isWindowVisible: true,
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
    isWindowVisible: true,
    config: {
      'col': 4,
      'row': 1,
      'sizex': 3,
      'sizey': 4
    }
  }
];

// The following fleshes out a plugin config object with other defaults that plugin reducers may supply.
// const getInitialState = (pluginConfig) => {
//   return pluginConfig;
//   // return Object.assign({}, pluginConfig, { isWindowVisible: isWindowVisibleReducer(pluginConfig.isWindowVisible) });
//   // if (pluginReducers[])
//   // return pluginReducers.forEach((reducerObj) => {
//   //   // Use config if given; else let reducers supply defaults.
//   //   console.log('in getInitialState:', reducerObj.name, pluginConfig);
//   //
//   //   if (pluginConfig[reducerObj.name]) {
//   //     return reducerObj.fn(pluginConfig[reducerObj.name]);
//   //   } else {
//   //     return reducerObj.fn();
//   //   }
// };
// // The following takes the initialConfig above and completes it with defaults from plugin reducers.
// const initialState = initialConfig.map(getInitialState);
export const pluginsReducer: ActionReducer<Array<any>> = (state: any = initialConfig, action: Action) => {
  switch (action.type) {
    case TOGGLE_PLUGIN:
      let newState = state.map((obj) => {
        if (obj && obj.pluginComponentName === action.payload.pluginComponentName) {
          console.log('in plugins tp isWindowVisible before:', obj.pluginTitle, obj.isWindowVisible);
          action.payload.isWindowVisible = !obj.isWindowVisible;
          console.log('in plugins tp isWindowVisible after:', action.payload.isWindowVisible);
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
