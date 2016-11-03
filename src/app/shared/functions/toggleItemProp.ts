
export const toggleItemProp = (state, action, R) => {
    const rightPluginName = R.eqProps('pluginName', action.payload);
    const pairingNotFuncWithPropName = R.assoc(action.payload.toToggle, R.not, {});
    const toggleProp = R.evolve(pairingNotFuncWithPropName);
    const toggleIfRightPlugin = R.when(rightPluginName, toggleProp);
    const findAndToggle = R.map(toggleIfRightPlugin);
    return findAndToggle(state);
};

export const setItemProp = (state, action, R) => {
  const rightPluginName = R.eqProps('pluginName', action.payload);
  const setProp = R.assoc(action.payload.propName, action.payload.value);
  const setIfRightPlugin = R.when(rightPluginName, setProp);
  const findAndSet = R.map(setIfRightPlugin);
  return findAndSet(state);
};
