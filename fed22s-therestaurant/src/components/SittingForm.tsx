import { ChangeEvent, FormEvent, useState } from "react";
import { IBooking, defaultBooking } from "../models/IBooking";
import setBookingLs from "../utils/setLS";

interface SittingFormProps {
  booking: IBooking;
  add: (booking: IBooking) => void;
  showTime: boolean;
  showDateForm: (showDate: boolean) => void;
  showCustomerForm: (showCustomer: boolean) => void;
}

const SittingForm = ({
  booking,
  add,
  showTime,
  showDateForm,
  showCustomerForm,
}: SittingFormProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    add({ ...booking, [name]: e.target.value });
    console.log(booking);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    showDateForm(false);
    showCustomerForm(true);
  };
  return (
    <div>
      {showTime ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="18">kl 18</label>
            <input
              type="radio"
              name="sitting"
              id="18"
              value={1}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="21">kl 21</label>
            <input
              type="radio"
              name="sitting"
              id="21"
              value={2}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Välj</button>
        </form>
      ) : null}
    </div>
  );
};

export default SittingForm;
