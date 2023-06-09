import { useState } from "react";
import CustomerForm from "../components/CustomerForm";
import DateForm from "../components/DateForm";
import { IBooking, defaultBooking } from "../models/IBooking";
import { Link } from "react-router-dom";
import { GDPRButton, LandingPageButton } from "../components/styled/Buttons";
import { GeneralWrapper } from "../components/styled/Wrappers";

const BookingPage = () => {
  const [booking, setBooking] = useState<IBooking>(defaultBooking);
  const [showDateForm, setDateForm] = useState(true);
  const [showCustomerForm, setShowCustomerForm] = useState(false);
  return (
    <>
      <h3>Bokningssida</h3>
      <GeneralWrapper flexdirection="column">
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
        <Link to="/gdpr">
          <GDPRButton>Personuppgiftspolicy</GDPRButton>
        </Link>
      </GeneralWrapper>
    </>
  );
};

export default BookingPage;
