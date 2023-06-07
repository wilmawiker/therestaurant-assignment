import { FormEvent } from "react";

const SittingForm = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  }
    return <form onSubmit={handleSubmit}>
        <h3>Välkommen</h3>
        <div>
        <label htmlFor="18">Sittning kl 18</label>
        <input type="radio" name="timeSlot" id="18" />
        </div>
        <div>
        <label htmlFor="21">Sittning kl 21</label>
        <input type="radio" name="timeSlot" id="21" />
        </div>
        <button type="submit">Välj</button>
    </form>
}

export default SittingForm;