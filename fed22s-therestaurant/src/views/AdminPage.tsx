import { useEffect, useState } from "react";
import { IBooking } from "./../models/IBooking";
import { getAllBookings } from "../services/bookingServices";
import setBookingsLs from "../utils/setLS";
import FilterBookings from "../components/FilterBookings";

const AdminPage = () => {
  const [bookings, setBookings] = useState<IBooking[]>([]);

  useEffect(() => {
    const getData = async () => {
      getAllBookings().then((bookings) => {
        setBookings(bookings);
        setBookingsLs(bookings);
      });
    };
    getData();
  }, []);

  return (
    <>
      <h3>Admin</h3>
      <FilterBookings></FilterBookings>
    </>
  );
};

export default AdminPage;
