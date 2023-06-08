import { useState } from "react";
import CustomerForm from "../components/CustomerForm";
import DateForm from "../components/DateForm";
import { IBooking, defaultBooking } from "../models/IBooking";


const BookingPage = () => {
    const [booking, setBooking] = useState<IBooking>(defaultBooking);
    const [showForm, setShowForm] = useState(false);
    return <><h3>Bokningssida</h3>
    <DateForm booking={booking} add={setBooking} show={setShowForm}></DateForm>
    <CustomerForm booking={booking}></CustomerForm>
    
    </>

}

export default BookingPage;