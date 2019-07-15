import {posts} from '../posts';

const INITIAL_STATE = {posts: posts}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'posts':
      return {...state, posts: action.payload}
    default:
      return state
  }
}