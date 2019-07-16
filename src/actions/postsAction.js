import { GET_POST_ID } from './types';
export const handleLike = (id) => { 
  return {
      type: GET_POST_ID,
      payload: id
    }
}