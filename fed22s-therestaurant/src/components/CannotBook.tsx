import { useContext } from "react";
import { BookingContext } from "../contexts/BookingContext";
import { StyledP } from "./styled/StyledP";
import { Wrapper } from "./styled/Wrappers";

interface CannotBookProps {
  show: boolean;
}

const CannotBook = ({ show }: CannotBookProps) => {
  const booking = useContext(BookingContext);

  return (
    <>
      {show ? (
        <Wrapper>
          <h2>Din bokning gick tyvärr inte igenom!</h2>
          <StyledP>
            Du får gärna testa igen :D
          </StyledP>
        </Wrapper>
      ) : null}
    </>
  );
};

export default CannotBook;
