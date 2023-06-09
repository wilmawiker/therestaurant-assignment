import { useEffect, useState } from "react";
import { IBooking } from "./../models/IBooking";
import { getAllBookings } from "../services/bookingServices";

const AdminPage = () => {
  const [bookings, setBookings] = useState<IBooking[]>([]);

  useEffect(() => {
    const getData = async () => {
      getAllBookings().then((bookings) => {
        setBookings(bookings);
      });
    };
    getData();
    console.log(bookings);
  }, []);

  return (
    <>
      <h3>AdminPage</h3>
      {bookings.map((booking) => (
        <div>
          <p>{booking.date.toString()}</p>
          <p>{booking.sitting.toString()}</p>
          <p>{booking.numberOfPeople.toString()}</p>
          <p>{booking.firstName}</p>
        </div>
      ))}
    </>
  );
};

export default AdminPage;
