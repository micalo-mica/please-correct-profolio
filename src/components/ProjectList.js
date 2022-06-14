import styled, { keyframes } from "styled-components";
import Project from "./Project";
import { products } from "../dat";

const Pl = styled.div`
  padding: 50px 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (max-width: 1024px) {
    padding: 10px 1px;
  }
  @media (max-width: 768px) {
    padding: 10px 1px;
  }
  @media (max-width: 480px) {
    padding: 10px;
  }
`;
const PlTexts = styled.div`
  width: 65%;

  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
    width: 100%;
  }
`;
const PlTitle = styled.h1`
  font-size: 50px;
  font-weight: 600;
  color: #ee9b00;

  @media (max-width: 1024px) {
    font-size: 40px;
    font-weight: 500;
  }
  @media (max-width: 768px) {
    font-size: 40px;
    font-weight: 500;
  }
  @media (max-width: 480px) {
    font-size: 30px;
    font-weight: 500;
  }
`;

const PlList = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;

function ProjectList() {
  return (
    <Pl>
      <PlTexts>
        <PlTitle>Create & Inspire.</PlTitle>
      </PlTexts>
      {/* my pro */}
      <PlList>
        {products.map((item) => (
          <Project key={item.id} img={item.img} link={item.link} />
        ))}
      </PlList>
    </Pl>
  );
}

export default ProjectList;
