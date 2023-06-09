import { IBooking } from "../models/IBooking";

export interface IAction {
  type: ActionType;
  payload: any;
}

export enum ActionType {
  NUMBEROFPEOPLE,
  SITTING,
  DATE,
  CUSTOMER,
}

export const BookingReducer = (booking: IBooking, action: IAction) => {
  switch (action.type) {
    case ActionType.NUMBEROFPEOPLE: {
      return [{ ...booking }];
    }

    default:
      break;
  }
};
