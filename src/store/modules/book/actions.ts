export function newAnnotation(anotationObj: object) {
  return {
    type: '@book/SET_NEW_ANNOTATION',
    payload: anotationObj,
  };
}

export function updateSyncedAnnotations(syncedAnnotations: []) {
  return {
    type: '@book/UPDATE_SYNCED_ANNOTATIONS',
    payload: syncedAnnotations,
  };
}
