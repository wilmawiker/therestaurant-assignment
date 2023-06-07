import { IBooking } from "../models/IBooking";

const setBookingLs = (booking: IBooking) => {
    localStorage.setItem("booking", JSON.stringify(booking));
}

export default setBookingLs;