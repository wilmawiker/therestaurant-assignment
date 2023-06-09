import React, { Fragment, useEffect, useState } from "react";
import { getAllBookings } from "../services/bookingServices";
import { IBooking } from "../models/IBooking";

export const AdminTable = () => {
  const [bookings, setBookings] = useState<IBooking[]>([]);

  useEffect(() => {
    const getData = async () => {
      getAllBookings().then((bookings) => {
        setBookings(bookings);
      });
    };
    getData();
  }, []);

  const handleClick = () => {};

  const removeBooking = () => {};

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Datum</th>
            <th>Förnamn</th>
            <th>Efternamn</th>
            <th>Antal Personer</th>
            <th>Bordsnummer</th>
            <th>Tid</th>
            <th>Ändra</th>
            <th>Ta bort</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr>
              <td>{booking.date.toString()}</td>
              <td>{booking.firstName}</td>
              <td>{booking.lastName}</td>
              <td>{booking.numberOfPeople.toString()}</td>
              <td>{booking.table?.toString()}</td>
              <td>{booking.sitting.toString()}</td>
              <td>
                <button onClick={handleClick}>Ändra</button>
              </td>
              <td>
                <button onClick={removeBooking}>Ta Bort</button>
              </td>
            </tr>
          ))}
          ;
        </tbody>
      </table>
    </>
  );
};
