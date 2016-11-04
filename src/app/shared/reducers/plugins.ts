import { ActionReducer, Action } from '@ngrx/store';
import * as R from 'ramda';
import { toggleItemProp } from '../functions/toggleItemProp';

export const ADD_PLUGIN = 'ADD_PLUGIN';
export const TOGGLE_PLUGIN = 'TOGGLE_PLUGIN';

const initialConfig = [
  {
    pluginTitle: 'Map',
    pluginName: 'map',
    // dragHandle: '.title', // not working yet
    isBoxVisible: true,
    isOn: true,
    config: {
      'row': 3,
      'col': 1,
      'sizex': 2,
      'sizey': 2
    }
  },
  // {
  //   pluginTitle: 'HLR',
  //   pluginName: 'hlr',
  //   // dragHandle: '.title', // not working yet
  //   isBoxVisible: true,
  //   config: {
  //     'row': 1,
  //     'col': 4,
  //     'sizex': 2,
  //     'sizey': 2
  //   }
  // },
  {
    pluginTitle: 'BSRs',
    pluginType: 'combo-a',
    pluginName: 'combo-a',
    // dragHandle: '.title', // not working yet
    isBoxVisible: true,
    config: {
      'row': 1,
      'col': 4,
      'sizex': 3,
      'sizey': 2
    }
  },
  {
    pluginTitle: 'Components',
    pluginName: 'plugins-manager',
    isOn: true,
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
      return toggleItemProp(state, action, R);

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
