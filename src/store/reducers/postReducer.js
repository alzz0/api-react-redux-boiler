import { FETCH_POSTS, NEW_POSTS } from "../actions/types";

const initState = {
  posts: [],
  post: {}
};

const postReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        posts: action.payload
      };
    case NEW_POSTS:
      return {
        ...state,
        post: action.payload
      };
    default:
      return state;
  }
};
export default postReducer;
