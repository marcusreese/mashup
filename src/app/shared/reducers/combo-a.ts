import { ActionReducer, Action } from '@ngrx/store';
import * as R from 'ramda';
import { toggleItemProp, setItemProp } from '../functions/toggleItemProp';

export const ADD_PLUGIN = 'ADD_PLUGIN';
export const TOGGLE_ON_OFF = 'TOGGLE_ON_OFF';
export const REMEMBER_LATEST = 'REMEMBER_LATEST';

const initialConfig = [
  // {
  //   pluginTitle: 'Map',
  //   pluginName: 'map',
  //   rfStatus: true,
  // },
  // {
  //   pluginTitle: 'External Systems',
  //   pluginType: 'combo-a',
  //   pluginName: 'combo-a'
  // },
  // {
  //   pluginTitle: 'Components',
  //   pluginName: 'plugins-manager',
  //   isOn: true
  // }
];

export const comboAReducer: ActionReducer<Array<any>> = (state: any = initialConfig, action: Action) => {
  switch (action.type) {
    case TOGGLE_ON_OFF:
      return toggleItemProp(state, action, R);

    case REMEMBER_LATEST:
      return setItemProp(state, action, R);

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
