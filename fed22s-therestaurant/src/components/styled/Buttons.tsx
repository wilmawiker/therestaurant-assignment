import styled from "styled-components";

interface IButtonProps {
  bgcolor: string;
  color: string;
  fontSize: string;
}

export const Button = styled.button<IButtonProps>`
  background-color: ${(props: IButtonProps) => props.bgcolor || "grey"};
  color: ${(props: IButtonProps) => props.color || "white"};
  padding: 0.5rem;
  border-radius: 15px;
  border: none;
  margin: 15px;
  font-family: "Poppins";
  font-size: ${(props: IButtonProps) => props.fontSize || "1rem"};
  cursor: pointer;
`;

export const LandingPageButton = styled(Button)``;

export const GDPRButton = styled(Button)`
  padding: 0.5rem;
  border-radius: 15px;
  margin: 15px;
`;
