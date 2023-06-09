import { ChangeEvent, useEffect, useState } from "react";
import bookingFromLS from "../utils/getLS";
import { IBooking } from "../models/IBooking";

interface FilterSearch {
  searchWord: string;
  filteredList: IBooking[];
}

const FilterBookings = () => {
  const [searchWord, setSearchWord] = useState("");
  const [bookings, setBookings] = useState<IBooking[]>([]);
  const [filteredList, setFilteredList] = useState<IBooking[]>(bookings);

  useEffect(() => {
    setBookings(bookingFromLS);
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchWord(e.target.value.toLowerCase());
    bookings.map((booking) => {
      console.log(booking);
    });
    console.log(bookings);
  };

  return (
    <div>
      <form>
        <input type="search" value={searchWord} onChange={handleChange} />
      </form>
      <ul>
        {filteredList.map((booking) => (
          <li key={booking._id?.toString()}>{booking.firstName}</li>
        ))}
      </ul>
    </div>
  );
};

export default FilterBookings;
