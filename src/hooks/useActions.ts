import {bindActionCreators} from '@reduxjs/toolkit';

import {allActions} from '../store/allActions';

import {useAppDispatch} from './reduxHooks';

export const useActions = () => {
  const dispatch = useAppDispatch();
  return bindActionCreators(allActions, dispatch);
};
