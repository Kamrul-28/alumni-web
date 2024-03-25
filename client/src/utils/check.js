export function isObject(obj) {
  return obj != null && obj.constructor.name === "Object";
}

export function isEmptyObj(obj) {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
}
