import { IBooking } from "../models/IBooking";

export interface IAction {
  type: ActionType;
  payload: string;
}

export enum ActionType {
  BOOKINGS,
  FILTEREDBOOKINGS,
}

const AdminReducer = (bookings: IBooking[], action: IAction): IBooking[] => {
  switch (action.type) {
    case ActionType.BOOKINGS: {
    }
  }
  return bookings;
};

export default AdminReducer;
