export interface IBooking {
  numberOfPeople: number;
  sitting: number;
  date: Date; // Remove the null option
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  _id: string;
}

export const defaultBooking: IBooking = {
  _id: "",
  numberOfPeople: 1,
  sitting: 1,
  date: new Date(), // Update the initial value to a valid Date
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
};
