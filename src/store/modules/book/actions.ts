export function newAnnotation(anotationObj: object) {
  return {
    type: '@book/SET_NEW_ANNOTATION',
    payload: anotationObj,
  };
}
