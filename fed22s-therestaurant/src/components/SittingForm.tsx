import { ChangeEvent, FormEvent, useState } from "react";
import { IBooking, defaultBooking } from "../models/IBooking";
import setBookingLs from "../utils/setLS";
import bookingFromLS from "../utils/getLS";

const SittingForm = () => {
    console.log(bookingFromLS);
    
    const [sitting, setSitting] = useState<IBooking>(bookingFromLS);
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name;
        setSitting({...sitting, [name]: e.target.value})    
    }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setBookingLs(sitting);
    console.log(sitting);
  }
    return <form onSubmit={handleSubmit}>
        <h3>Välkommen</h3>
        <div>
        <label htmlFor="18">Sittning kl 18</label>
        <input type="radio" name="sitting" id="18" value={1} onChange={handleChange}/>
        </div>
        <div>
        <label htmlFor="21">Sittning kl 21</label>
        <input type="radio" name="sitting" id="21" value={2} onChange={handleChange}/>
        </div>
        <button type="submit">Välj</button>
    </form>
}

export default SittingForm;