import { useState } from "react";
import CustomerForm from "../components/CustomerForm";
import DateForm from "../components/DateForm";
import { IBooking, defaultBooking } from "../models/IBooking";

const BookingPage = () => {
  const [booking, setBooking] = useState<IBooking>(defaultBooking);
  const [showDateForm, setDateForm] = useState(true);
  const [showCustomerForm, setShowCustomerForm] = useState(false);
  return (
    <>
      <h3>Bokningssida</h3>
      <DateForm
        booking={booking}
        add={setBooking}
        dateForm={showDateForm}
        showDateForm={setDateForm}
        showCustomerForm={setShowCustomerForm}
      ></DateForm>
      <CustomerForm
        booking={booking}
        add={setBooking}
        showForm={showCustomerForm}
      ></CustomerForm>
    </>
  );
};

export default BookingPage;
