const STAT = 'bookStore/categories/STATUS';

const initialState = 'Unknown status';


export default function categoryReduce(state = initialState, action) {
  switch (action.type) {
    case STAT:
      return 'Under creation';
    default:
      return state;
  }
}

export function categAction() {
  return {
    type: STAT,
  };
}