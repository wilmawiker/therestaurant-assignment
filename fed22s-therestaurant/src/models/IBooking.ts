export interface IBooking {
  id?: Number;
  table?: Number;
  numberOfPeople: Number;
  sitting: Number;
  email: String;
  phoneNumber: String;
  date: Date;
}

export const defaultBooking: IBooking = {
    numberOfPeople: 0,
    sitting: 1,
    email: "",
    phoneNumber: "",
    date: new Date()
}

 


