import { Dispatch, createContext } from "react";
import { IAction } from "../reducers/BookingReducer";

const BookingDispatchContext = createContext<Dispatch<IAction>>(() => {
  return;
});
