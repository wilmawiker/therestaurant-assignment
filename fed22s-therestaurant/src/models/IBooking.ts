export interface IBooking {
  id?: number;
  table?: number[];
  numberOfPeople: number;
  sitting: number;
  date: Date;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
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
