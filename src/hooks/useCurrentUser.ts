import {useAppSelector} from "./reduxHooks";

export const useCurrentUser = () => {
  const { name, email, img } = useAppSelector((state) => state.currentUser);
  return {
    isAuth: !!email,
    email,
    name,
    img
  };
};
