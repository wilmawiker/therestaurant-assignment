import { TableWrapper, Wrapper } from "../components/styled/Wrappers";
import {
  deleteBookingById,
  updateBookingById,
} from "../services/bookingServices";
import { Button } from "../components/styled/Buttons";
import { IBooking } from "../models/IBooking";
import { Link } from "react-router-dom";
import { Table, TableData, TableHeader, TableRow } from "./styled/Table";

interface FilterBookingsProps {
  booking: IBooking;
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
        <Button bgcolor="black" color="white" fontSize="0.7rem">
          Tillbaka
        </Button>
      </Link>
      <Table>
        <thead>
          <TableRow>
            <TableHeader>Datum</TableHeader>
            <TableHeader>Förnamn</TableHeader>
            <TableHeader>Efternamn</TableHeader>
            <TableHeader>Gäster</TableHeader>
            <TableHeader>Sittning</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          <TableRow>
            <TableData>
              {new Date(booking?.date).toLocaleDateString()}
            </TableData>
            <TableData>{booking?.firstName}</TableData>
            <TableData>{booking?.lastName}</TableData>
            <TableData>{booking?.numberOfPeople.toString()}</TableData>
            <TableData>{booking?.sitting.toString()}</TableData>
            <TableData>
              <Button
                bgcolor="black"
                color="white"
                fontSize="0.7rem"
                onClick={() => SaveBooking(booking._id)}
              >
                Spara
              </Button>
            </TableData>
            <TableData>
              <Button
                bgcolor="red"
                color="white"
                fontSize="0.7rem"
                type="button"
                onClick={() => RemoveBooking(booking._id)}
              >
                Ta Bort
              </Button>
            </TableData>
          </TableRow>
        </tbody>
      </Table>
    </Wrapper>
  );
};

export default AdminMoreDetails;
