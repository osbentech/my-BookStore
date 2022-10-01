const STAT = 'bookStore/categories/STATUS';

const initialState = 'status Unknown';

export default function categoryReduce(state = initialState, action) {
  switch (action.type) {
    case STAT:
      return 'still constructing';
    default:
      return state;
  }
}

export function categAction() {
  return {
    type: STAT,
  };
}