import { IBooking } from "../models/IBooking";

export enum ActionType {
  SET_NUMBER_OF_PEOPLE,
  SET_SITTING,
  SET_DATE,
  SET_FIRST_NAME,
  SET_LAST_NAME,
  SET_EMAIL,
  SET_PHONE_NUMBER,
  FIRSTNAME,
  LASTNAME,
  EMAIL,
  PHONENUMBER
}

export interface IAction {
  type: ActionType;
  payload: any;
}

const BookingReducer = (booking: IBooking, action: IAction): IBooking => {
  switch (action.type) {
    case ActionType.SET_NUMBER_OF_PEOPLE: {
      return { ...booking, numberOfPeople: action.payload };
    }

    case ActionType.SET_SITTING: {
      return { ...booking, sitting: action.payload };
    }

    case ActionType.SET_DATE: {
      return { ...booking, date: action.payload };
    }

    case ActionType.SET_FIRST_NAME: {
      return { ...booking, firstName: action.payload };
    }

    case ActionType.SET_LAST_NAME: {
      return { ...booking, lastName: action.payload };
    }

    case ActionType.SET_EMAIL: {
      return { ...booking, email: action.payload };
    }

    case ActionType.SET_PHONE_NUMBER: {
      return { ...booking, phoneNumber: action.payload };
    }

    default: {
      return booking;
    }
  }
};

export default BookingReducer;
