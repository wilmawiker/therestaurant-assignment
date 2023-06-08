import { ChangeEvent, FormEvent, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { IBooking, defaultBooking } from "../models/IBooking";
import setBookingLs from "../utils/setLS";
import SittingForm from "./SittingForm";
import { ValuePiece } from "../utils/valuePiece";
import { Wrapper } from "./styled/Wrappers";

interface IDateFormProps {
  booking: IBooking;
  add: (booking: IBooking) => void;
  dateForm: boolean;
  showDateForm: (showDate: boolean) => void;
  showCustomerForm: (showCustomer: boolean) => void;
}

const DateForm = ({
  booking,
  add,
  dateForm,
  showDateForm,
  showCustomerForm,
}: IDateFormProps) => {
  const [date, setDate] = useState<ValuePiece | [ValuePiece, ValuePiece]>(
    new Date()
  );
  const [showTime, setShowTime] = useState(false);

  const handlePeopleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const name = e.target.name;
    add({ ...booking, [name]: e.target.value });
    console.log(booking);
  };

  const handleDateChange = (date: ValuePiece | [ValuePiece, ValuePiece]) => {
    setDate(date);
    const chosenDate = date?.toString() as string;
    add({ ...booking, date: new Date(chosenDate) });
    setShowTime(true);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Hej");
  };
  return (
    <>
      <div>
        {" "}
        {dateForm ? (
          <Wrapper>
            <form onSubmit={handleSubmit}>
              <label htmlFor="guests">Antal gäster:</label>
              <select
                name="numberOfPeople"
                id="guests"
                onChange={handlePeopleChange}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </select>
              <Calendar
                onChange={handleDateChange}
                value={date}
                minDate={new Date()}
              />
            </form>
            <SittingForm
              booking={booking}
              add={add}
              showTime={showTime}
              showDateForm={showDateForm}
              showCustomerForm={showCustomerForm}
            />
          </Wrapper>
        ) : null}
      </div>
    </>
  );
};

export default DateForm;
