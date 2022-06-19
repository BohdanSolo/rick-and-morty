import {useAppSelector} from "./reduxHooks";
import {CurrentUserSliceTypes} from "../types/slicesTypes";

interface useCurrentUserTypes extends CurrentUserSliceTypes {
    isAuth: boolean,
}

export const useCurrentUser = (): useCurrentUserTypes => {
    const {name, email, img} = useAppSelector((state) => state.currentUser);
    return {
        isAuth: !!email,
        email,
        name,
        img
    };
};
