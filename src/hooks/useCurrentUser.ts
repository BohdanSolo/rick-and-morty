import {CurrentUserSliceTypes} from '../types/slicesTypes';

import {useAppSelector} from './reduxHooks';

interface useCurrentUserTypes extends CurrentUserSliceTypes {
    isAuth: boolean,
}

export const useCurrentUser = (): useCurrentUserTypes => {
  const {name, email, img} = useAppSelector((state) => state.currentUser);
  return {
    isAuth: !!email,
    email,
    name,
    img,
  };
};
