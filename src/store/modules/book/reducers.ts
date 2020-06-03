import produce from 'immer';

const INITIAL_STATE = {
  annotations: [],
};

export default function book(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case '@book/SET_NEW_ANNOTATION':
      return produce(state, (draft: any) => {
        draft.annotations.push(action.payload);
      });
    case '@book/UPDATE_SYNCED_ANNOTATIONS':
      return produce(state, (draft: any) => {
        draft.annotations = state.annotations.map((annotation) =>
          action.payload.includes(annotation.id)
            ? { ...annotation, synced: true }
            : annotation,
        );
      });
    default:
      return state;
  }
}
