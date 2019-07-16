import { TOGGLE_LIKE } from './types';
export const handleLike = (id) => { 
  return {
      type: TOGGLE_LIKE,
      payload: id
    }
}