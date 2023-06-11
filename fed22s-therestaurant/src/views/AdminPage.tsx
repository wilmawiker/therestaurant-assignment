import { useEffect, useState } from "react";
import { IBooking } from "./../models/IBooking";
import { getAllBookings } from "../services/bookingServices";
import setBookingsLs from "../utils/setLS";
import FilterBookings from "../components/FilterBookings";
import { AdminTable } from "../components/AdminTable";
import { BackgroundImage } from "../components/styled/BackgroundImage";

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
      <FilterBookings bookings={bookings} set={setBookings}></FilterBookings>
      <AdminTable bookings={bookings} set={setBookings}></AdminTable>
    </>
  );
};

export default AdminPage;
