import produce from 'immer';

const INITIAL_STATE = {
  annotations: [],
};

export default function book(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@book/SET_NEW_ANNOTATION':
      return produce(state, (draft: any) => {
        draft.annotations.push(action.payload);
      });
    default:
      return state;
  }
}
