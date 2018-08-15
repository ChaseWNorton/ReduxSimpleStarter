import { FETCH_POSTS } from "../actions";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_POSTS: {
      return action.payload.data.reduce((total, ele) => {
        total[ele.id] = ele;
        return total;
      }, {});
      console.log(action.payload.data);
    }

    default:
      return state;
  }
}
