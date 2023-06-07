export interface IBooking {

    numberOfPeople: number;
    sitting: number;
    email: string;
    date: Date;
}

export const defaultBooking: IBooking = {
    numberOfPeople: 0,
    sitting: 1,
    email: "",
    date: new Date()
}

  id: number;
  table: Number;
  numberOfPeople: Number;
  sitting: Number;
  email: String;
  phoneNumber: String;
  date: Date;
}

