import { ChangeEvent, FormEvent, useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { useForm } from "react-hook-form";
import { IBooking, defaultBooking } from "../models/IBooking";
import bookingFromLS from "../utils/getLS";
import setBookingLs from "../utils/setLS";


const DateForm = () => {
    const [booking, setBooking] = useState<IBooking>(defaultBooking);
    const [date, setDate] = useState(new Date());

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const name = e.target.name;
        setBooking({...booking, [name]: e.target.value});
        console.log(booking);  
    }

    const handleDateChange = (e: ChangeEvent<Calendar>) => {

        setBooking({...booking, date: date})
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log(booking);
        
        setBookingLs(booking)
    }
    return <>
    <form onSubmit={handleSubmit}>
    <label htmlFor="guests">Antal gäster:</label>
    <select name="numberOfPeople" id="guests" onChange={handleChange}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
    </select>
    <Calendar onChange={setDate} value={date}/>
    <button>Kolla tillgänglighet
    </button>
</form>
<p>{date.toDateString()}</p>
</>
}

export default DateForm;