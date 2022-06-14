import styled, { keyframes } from "styled-components";

const F = styled.div`
  height: 90px;
  background-color: #000000;
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
  justify-content: center;
  padding: 18px 0px;
  color: white;

  @media (max-width: 1024px) {
    height: 70px;
    gap: 5px;
    padding: 18px 2px;
  }
  @media (max-width: 768px) {
    height: 70px;
    gap: 5px;
    padding: 18px 2px;
  }
  @media (max-width: 480px) {
    height: 70px;
    gap: 5px;
    padding: 20px 2px;
  }
`;

const Collaborator = styled.h2`
  font-size: 18px;
  font-weight: 500;

  @media (max-width: 1024px) {
    font-size: 16px;
    font-weight: 500;
  }
  @media (max-width: 768px) {
    font-size: 16px;
    font-weight: 500;
  }
  @media (max-width: 480px) {
    font-size: 12px;
    font-weight: 500;
    width: 80%;
  }
`;

const Bold = styled.b`
  color: #ee9b00;

  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;

const GetToMe = styled.h4`
  font-size: 16px;
  text-align: center;

  @media (max-width: 1024px) {
    font-size: 12px;
    font-weight: 500;
  }
  @media (max-width: 768px) {
    font-size: 12px;
    font-weight: 500;
  }
  @media (max-width: 480px) {
    font-size: 10px;
    font-weight: 500;
  }
`;

function Footer() {
  return (
    <F>
      <Collaborator>
        Site developed by <Bold>Me</Bold> and <Bold>Kansi</Bold> , designed by
        <Bold>Kansi</Bold>
      </Collaborator>

      <GetToMe>
        For work, send me an email @<Bold> nwaforchukwukamicah@gmail.com</Bold>
      </GetToMe>
    </F>
  );
}

export default Footer;
