
export const toggleItemProp = (state, action, R) => {
    const rightPluginName = R.eqProps('pluginName', action.payload);
    const pairingNotFuncWithPropName = R.assoc(action.payload.toToggle, R.not, {});
    const toggleProp = R.evolve(pairingNotFuncWithPropName);
    const toggleIfRightPlugin = R.when(rightPluginName, toggleProp);
    const findAndToggle = R.map(toggleIfRightPlugin);
    return findAndToggle(state);
};
