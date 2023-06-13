import { useReducer, useState } from "react";
import CustomerForm from "../components/CustomerForm";
import DateForm from "../components/DateForm";
import { IBooking, defaultBooking } from "../models/IBooking";
import { Link } from "react-router-dom";
import { GDPRButton, LandingPageButton } from "../components/styled/Buttons";
import { GeneralWrapper } from "../components/styled/Wrappers";
import {
  BookingContext,
  BookingDispatchContext,
} from "../contexts/BookingContext";
import BookingReducer from "../reducers/BookingReducer";

const BookingPage = () => {
  const [booking, dispatch] = useReducer(BookingReducer, defaultBooking);
  const [showDateForm, setDateForm] = useState(true);
  const [showCustomerForm, setShowCustomerForm] = useState(false);
  return (
    <BookingContext.Provider value={booking}>
      <BookingDispatchContext.Provider value={dispatch}>
        <GeneralWrapper flexdirection="column">
          <DateForm
            dateForm={showDateForm}
            showDateForm={setDateForm}
            showCustomerForm={setShowCustomerForm}
          ></DateForm>
          <CustomerForm showForm={showCustomerForm}></CustomerForm>
          <Link to="/gdpr">
            <GDPRButton bgcolor="gray" color="white" fontSize="0.8rem">
              Personuppgiftspolicy
            </GDPRButton>
          </Link>
        </GeneralWrapper>
      </BookingDispatchContext.Provider>
    </BookingContext.Provider>
  );
};

export default BookingPage;
