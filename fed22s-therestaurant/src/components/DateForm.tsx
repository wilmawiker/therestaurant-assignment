import { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { useForm } from "react-hook-form";


const DateForm = () => {
    const { handleSubmit, register, formState: { errors } } = useForm();
    const onSubmit = (values: any) => console.log(values);
    const [date, changeDate] = useState(new Date());
    return <>
    <form onSubmit={handleSubmit(onSubmit)}>
    <label htmlFor="guests">Antal gäster:</label>
    <select name="guests" id="guests">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
    </select>
    <Calendar onChange={changeDate} value={
        date
    }/>
</form>
<p>{date.toDateString()}</p>
</>
}

export default DateForm;