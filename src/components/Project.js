import styled, { keyframes } from "styled-components";

const P = styled.div`
  width: 30%;
  height: 50vh;
  margin: 20px 10px;
  border: 2px solid rgb(243, 242, 242);
  border-radius: 10px 10px 0px 0px;
  overflow: hidden;

  &:hover {
    Img {
      transform: translateY(-100%);
    }
  }

  @media (max-width: 1024px) {
    height: 29vh;
    margin: 10px 5px;
  }
  @media (max-width: 768px) {
    height: 30vh;
    margin: 10px 5px;
  }
  @media (max-width: 480px) {
    width: 90vw;
    height: 30vh;
    margin: 10px 5px;
  }
`;

const PBrowser = styled.div`
  height: 20px;
  background-color: rgb(243, 242, 242);
  display: flex;
  align-items: center;
  position: sticky;
  z-index: 2;

  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;

const PCircle = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  margin: 3px;
  background-color: white;

  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;

const Img = styled.img`
  width: 100%;
  transition: all 10s ease;

  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;

function Project({ img, link }) {
  return (
    <P>
      <PBrowser>
        <PCircle></PCircle>
        <PCircle></PCircle>
        <PCircle></PCircle>
      </PBrowser>
      <a href={link} target="_blank" rel="noreferrer">
        <Img src={img} alt="" />
      </a>
    </P>
  );
}

export default Project;
