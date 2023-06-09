export interface IBooking {
  _id: String;
  table: Number;
  numberOfPeople: Number;
  sitting: Number;
  date: Date;
  firstName: String;
  lastName: String;
  email: String;
  phoneNumber: String;
}

export const defaultBooking: IBooking = {
  _id: "",
  table: 0,
  numberOfPeople: 1,
  sitting: 1,
  date: new Date(),
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
};
