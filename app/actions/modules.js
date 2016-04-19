export const SET_MODULES = 'SET_MODULES';
export const SET_MODULE = 'SET_MODULE';
export const DELETE_MODULE = 'DELETE_MODULE';

export function setModules(modules) {
  return {
    type: SET_MODULES,
    modules,
  };
}

export function setModule(moduleName, module) {
  return {
    type: SET_MODULE,
    moduleName,
    module,
  };
}

export function deleteModule(moduleName) {
  return {
    type: DELETE_MODULE,
    moduleName,
  };
}
