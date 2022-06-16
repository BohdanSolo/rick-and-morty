import { useAppDispatch } from "./reduxHooks";
import { bindActionCreators } from "@reduxjs/toolkit";
import { allActions } from "../store/allActions";

export const useActions = () => {
  const dispatch = useAppDispatch();
  return bindActionCreators(allActions, dispatch);
};
