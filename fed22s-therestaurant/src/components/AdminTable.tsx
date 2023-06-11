import { useEffect, useState } from "react";
import { getAllBookings, deleteBookingById } from "../services/bookingServices";
import { IBooking } from "../models/IBooking";
import { Wrapper } from "./styled/Wrappers";
import { Button } from "./styled/Buttons";

interface FilterBookingsProps {
  bookings: IBooking[];
  set: (bookings: IBooking[]) => void;
}

export const AdminTable = ({ bookings, set }: FilterBookingsProps) => {
  useEffect(() => {
    const getData = async () => {
      getAllBookings().then((bookings) => {
        set(bookings);
      });
    };
    getData();
  }, []);

  const todaysBookings = bookings.filter((booking) => {
    return (
      new Date(booking.date).toLocaleDateString() ==
      new Date().toLocaleDateString()
    );
  });

  console.log(todaysBookings);

  const handleClick = () => {};

  function removeBooking(id: string) {
    console.log(id);
    deleteBookingById(id);
  }

  return (
    <Wrapper>
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
            <tr key={booking._id.toString()}>
              <td>{new Date(booking.date).toLocaleDateString()}</td>
              <td>{booking.firstName}</td>
              <td>{booking.lastName}</td>
              <td>{booking.numberOfPeople.toString()}</td>
              <td>{booking.table?.toString()}</td>
              <td>{booking.sitting.toString()}</td>
              <td>
                <Button
                  bgcolor="black"
                  color="white"
                  fontSize="0.7rem"
                  onClick={handleClick}
                >
                  Ändra
                </Button>
              </td>
              <td>
                <Button
                  bgcolor="red"
                  color="white"
                  fontSize="0.7rem"
                  type="button"
                  onClick={() => removeBooking(booking._id)}
                >
                  Ta Bort
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Wrapper>
  );
};
