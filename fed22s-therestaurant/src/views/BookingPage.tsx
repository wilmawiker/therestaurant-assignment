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
import BookingConfirmation from "../components/BookingConfirmation";

const BookingPage = () => {
  const [booking, dispatch] = useReducer(BookingReducer, defaultBooking);
  const [showDateForm, setDateForm] = useState(true);
  const [showCustomerForm, setShowCustomerForm] = useState(false);
  const [showBookingConfirmation, setShowBookingConfirmation] = useState(false);

  return (
    <BookingContext.Provider value={booking}>
      <BookingDispatchContext.Provider value={dispatch}>
        <GeneralWrapper flexdirection="column">
          <DateForm
            dateForm={showDateForm}
            showDateForm={setDateForm}
            showCustomerForm={setShowCustomerForm}
          ></DateForm>
          <CustomerForm
            showForm={showCustomerForm}
            showCustomerForm={setShowCustomerForm}
            showConfirmation={setShowBookingConfirmation}
          ></CustomerForm>
          <BookingConfirmation
            show={showBookingConfirmation}
          ></BookingConfirmation>
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
function useEffect(arg0: () => void, arg1: never[]) {
  throw new Error("Function not implemented.");
}
