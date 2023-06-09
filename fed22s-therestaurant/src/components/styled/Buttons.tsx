import styled from "styled-components";

interface IButtonProps {
  bgcolor: string;
  color: string;
}

export const Button = styled.button<IButtonProps>`
  background-color: ${(props: IButtonProps) => props.bgcolor || "grey"};
  color: ${(props: IButtonProps) => props.color || "white"};
  padding: 0.5rem;
  border-radius: 15px;
  margin: 15px;
`;

export const LandingPageButton = styled(Button)``;
