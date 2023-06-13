export interface IBooking {
  _id: string;
  table: number[];
  numberOfPeople: number;
  sitting: number;
  date: Date; // Remove the null option
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}

export const defaultBooking: IBooking = {
  _id: "",
  table: [],
  numberOfPeople: 1,
  sitting: 1,
  date: new Date(), // Update the initial value to a valid Date
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
};
