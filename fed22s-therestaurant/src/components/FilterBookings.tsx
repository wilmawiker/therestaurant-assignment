import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import bookingFromLS from "../utils/getLS";
import { IBooking } from "../models/IBooking";

interface FilterBookingsProps {
  bookings: IBooking[];
  set: (bookings: IBooking[]) => void;
}

const FilterBookings = ({ bookings, set }: FilterBookingsProps) => {
  const [searchWord, setSearchWord] = useState("");

  useEffect(() => {
    set(bookingFromLS);
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchWord(e.target.value.toLowerCase());
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const filteredList = bookings.filter((booking) => {
      return (
        new Date(booking.date).toLocaleDateString().includes(searchWord) ||
        booking.email.toLowerCase().includes(searchWord) ||
        booking.firstName.toLowerCase().includes(searchWord) ||
        booking.lastName.toLowerCase().includes(searchWord) ||
        booking.phoneNumber.includes(searchWord)
      );
    });
    set(filteredList);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="search" value={searchWord} onChange={handleChange} />
      </form>
    </div>
  );
};

export default FilterBookings;
