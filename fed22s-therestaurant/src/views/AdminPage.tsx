import { useEffect, useState } from "react";
import { IBooking } from "./../models/IBooking";

const AdminPage = () => {
  const [bookings, setBookings] = useState<IBooking[]>([]);

  //   useEffect(() => {
  //     const getData = async () => {

  //       setBookings(response);
  //     };
  //     getData();
  //   }, []);

  return (
    <>
      <h3>AdminPage</h3>
      {/* {bookings.map((booking, index) => {
        return (
          <div key={index}>
            <p>{booking.email}</p>
            <span>{booking.date.toString()}</span>
          </div>
        );
      })} */}
    </>
  );
};

export default AdminPage;
