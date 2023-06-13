import { Wrapper } from "../components/styled/Wrappers";
import {
  deleteBookingById,
  updateBookingById,
  getBookingById,
} from "../services/bookingServices";
import { Button } from "../components/styled/Buttons";
import { IBooking } from "../models/IBooking";
import { Link, useParams } from "react-router-dom";

interface FilterBookingsProps {
  booking: IBooking;
  //   set: (bookings: IBooking[]) => void;
}

export const AdminMoreDetails = ({ booking }: FilterBookingsProps) => {
  function SaveBooking(id: string) {
    updateBookingById(id);
  }

  function RemoveBooking(id: string) {
    deleteBookingById(id);
  }

  return (
    <Wrapper>
      <Link to="/admin">
        <button>Tillbaka</button>
      </Link>
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
          <tr>
            <td>{new Date(booking?.date).toLocaleDateString()}</td>
            <td>{booking?.firstName}</td>
            <td>{booking?.lastName}</td>
            <td>{booking?.numberOfPeople.toString()}</td>
            <td>{booking?.table?.toString()}</td>
            <td>{booking?.sitting.toString()}</td>
            <td>
              <Button
                bgcolor="black"
                color="white"
                fontSize="0.7rem"
                onClick={() => SaveBooking(booking._id)}
              >
                Spara
              </Button>
            </td>
            <td>
              <Button
                bgcolor="red"
                color="white"
                fontSize="0.7rem"
                type="button"
                onClick={() => RemoveBooking(booking._id)}
              >
                Ta Bort
              </Button>
            </td>
          </tr>
        </tbody>
      </table>
    </Wrapper>
  );
};

export default AdminMoreDetails;
