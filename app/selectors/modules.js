export function modules(state) {
  return state.modules;
}

export const moduleByName = (moduleName) => (state) => {
  return modules(state).get(moduleName);
};
