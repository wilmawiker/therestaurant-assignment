import { useEffect, useState } from "react";
import { IBooking } from "./../models/IBooking";
import { getAllBookings } from "../services/bookingServices";
import { AdminTable } from "../components/AdminTable";

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
      <AdminTable></AdminTable>
    </>
  );
};

export default AdminPage;
