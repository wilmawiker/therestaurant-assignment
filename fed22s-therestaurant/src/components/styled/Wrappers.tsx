import styled from "styled-components";

interface IWrapperProps {
  flexdirection: string;
}

export const GeneralWrapper = styled.div<IWrapperProps>`
  display: flex;
  flex-direction: ${(props: IWrapperProps) => props.flexdirection || "row"};
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  min-width: 100vw;
  margin: 0;
  padding: 0;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: #ebe5d3;
  opacity: 80%;
  margin: 20px;
  border-radius: 15px;
  padding: 10px;
`;

export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
`;
