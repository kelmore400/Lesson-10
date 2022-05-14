import { CHANGE_TITLE } from '../constants/actions';

export const changeTitle = title => { 
  return { 
    type: CHANGE_TITLE, 
    title
  } 
};