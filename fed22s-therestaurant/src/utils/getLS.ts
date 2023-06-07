import { IBooking } from "../models/IBooking";

const bookingFromLS: IBooking = JSON.parse(
    localStorage.getItem("booking") || "{}"
);

export default bookingFromLS;