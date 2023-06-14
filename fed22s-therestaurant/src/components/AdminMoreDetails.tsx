import { Wrapper } from "../components/styled/Wrappers";
import {
  deleteBookingById,
  updateBookingById,
} from "../services/bookingServices";
import { useState } from "react";
import { Button } from "../components/styled/Buttons";
import { IBooking } from "../models/IBooking";
import { Link } from "react-router-dom";
import { Table, TableData, TableHeader, TableRow } from "./styled/Table";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import { ValuePiece } from "../utils/valuePiece";

interface FilterBookingsProps {
  booking: IBooking;
}

export const AdminMoreDetails = ({ booking }: FilterBookingsProps) => {
  const [pickedDate, changeDate] = useState<
    ValuePiece | [ValuePiece, ValuePiece]
  >(booking.date);
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
              <DatePicker
                onChange={changeDate}
                value={pickedDate}
                minDate={new Date()}
              ></DatePicker>
            </TableData>
            <TableData>
              <input
                type="text"
                placeholder={booking?.firstName}
                className="input__text"
              />
            </TableData>
            <TableData>
              <input
                type="text"
                placeholder={booking?.lastName}
                className="input__text"
              />
            </TableData>
            <TableData>
              <input
                type="number"
                placeholder={booking?.numberOfPeople.toString()}
                className="input__number"
              />
            </TableData>
            <TableData>
              <input
                type="number"
                min={1}
                max={2}
                placeholder={booking?.sitting.toString()}
                className="input__number"
              />
            </TableData>
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
