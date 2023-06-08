export interface IBooking {
  id?: Number;
  table?: Number;
  numberOfPeople: Number;
  sitting: Number;
  date: Date;
  firstName: String;
  lastName: String;
  email: String;
  phoneNumber: String;
}

export const defaultBooking: IBooking = {
    numberOfPeople: 1,
    sitting: 1,
    date: new Date(),
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
}

 


