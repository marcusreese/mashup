import { ActionReducer, Action } from '@ngrx/store';
import * as R from 'ramda';

export const ADD_PLUGIN = 'ADD_PLUGIN';
export const TOGGLE_PLUGIN = 'TOGGLE_PLUGIN';

const initialConfig = [
  {
    pluginTitle: 'Map',
    pluginName: 'map',
    // dragHandle: '.title', // not working yet
    isBoxVisible: true,
    config: {
      'row': 3,
      'col': 1,
      'sizex': 5,
      'sizey': 2
    }
  },
  {
    pluginTitle: 'HLR',
    pluginName: 'hlr',
    // dragHandle: '.title', // not working yet
    isBoxVisible: true,
    config: {
      'row': 1,
      'col': 4,
      'sizex': 2,
      'sizey': 2
    }
  },
  {
    pluginTitle: 'Components',
    pluginName: 'plugins-manager',
    // dragHandle: '.title', // not working yet
    isBoxVisible: true,
    config: {
      'col': 1,
      'row': 1,
      'sizex': 3,
      'sizey': 2
    }
  }
];

export const pluginsReducer: ActionReducer<Array<any>> = (state: any = initialConfig, action: Action) => {
  switch (action.type) {
    case TOGGLE_PLUGIN:
      const rightPluginName = R.eqProps('pluginName', action.payload);
      const toggleIsBoxVisible = R.evolve({ isBoxVisible: R.not });
      const toggleIfClicked = R.when(rightPluginName, toggleIsBoxVisible);
      const findAndToggleClicked = R.map(toggleIfClicked);
      return findAndToggleClicked(state);
    case ADD_PLUGIN:
      const addToStarter = R.merge({
        isBoxVisible: true,
        config: {
          'col': 1,
          'row': 1,
          'sizex': 2,
          'sizey': 1
        }
      });
      return R.concat([addToStarter(action.payload)], state);
    default:
      return state;
  }
};
