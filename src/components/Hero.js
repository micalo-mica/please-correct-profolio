import styled, { keyframes } from "styled-components";
import Micah from "../img/micah.jpg";

const H = styled.div`
  height: calc(100vh - 70px);
  display: flex;
  overflow: hidden;
  background-color: #03071e;

  @media (max-width: 1024px) {
    height: calc(60vh - 70px);
    /* height: 50vh; */
  }
  @media (max-width: 768px) {
    height: calc(60vh - 70px);
    /* height: 50vh; */
  }
  @media (max-width: 480px) {
    height: calc(100vh - 70px);
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;

  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;

const LeftWrapper = styled.div`
  padding: 50px;
  height: 50%;
  /* height: 70vh; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 1024px) {
    padding: 0px 10px;
    /* padding: 10px; */
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100%;
  }
  @media (max-width: 768px) {
    padding: 0px 10px;
    /* padding: 10px; */
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100%;
  }
  @media (max-width: 480px) {
    padding: 0px 0px 10px 10px;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100%;
  }
`;

const Details = styled.div``;

const nameintro = keyframes`
  0% {
          left: -300px
        };
    

    100% {
        left: 10px
    }
`;

const NameIntro = styled.h2`
  font-size: 30px;
  font-weight: 300;
  position: relative;
  animation: ${nameintro};
  animation-duration: 3s;
  animation-fill-mode: forwards;

  @media (max-width: 1024px) {
    font-size: 20px;
    font-weight: 300;
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
    font-size: 20px;
    font-weight: 300;
    margin-top: 5px;
  }
`;

const name = keyframes`
  0% 
        {top: -300px};

    100% {
        top: 10px
    }
`;

const Name = styled.h2`
  /* font size was 50 before */
  font-size: 40px;
  position: relative;
  animation: ${name};
  animation-duration: 3s;
  animation-fill-mode: forwards;

  @media (max-width: 1024px) {
    margin-bottom: 10px;
    font-size: 25px;
    font-weight: bold;
  }
  @media (max-width: 768px) {
    margin-bottom: 10px;
    font-size: 25px;
    font-weight: bold;
  }
  @media (max-width: 480px) {
    margin-bottom: 10px;
    font-size: 25px;
    font-weight: bold;
  }
`;

const JobAnimation = styled.div`
  height: 50px;

  /* margin-top: 50px; */
  overflow: hidden;

  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;

const move = keyframes`
  25%{
    transform:translateY(-50px)
  }
  50%{
    transform:translateY(-100px)
  }
  75%{
    transform:translateY(-150px)
  }
  100%{
    transform:translateY(-200px)
  }
`;

const Jobs = styled.div`
  height: 100%;
  animation: ${move} 10s ease-out infinite alternate;
`;

const Job = styled.div`
  height: 50px;
  font-size: 30px;
  font-weight: bold;
  color: #ee9b00;
  display: flex;
  align-items: center;

  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
    font-size: 25px;
  }
`;

const SmallIntro = styled.div`
  @media (max-width: 1024px) {
    margin-top: 3px;
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
    display: none;
  }
`;

const Right = styled.div`
  flex: 1;

  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
    object-fit: contain;
  }
  @media (max-width: 480px) {
    object-fit: contain;
  }
`;

function Hero() {
  return (
    <H>
      {/* left */}
      <Left>
        <LeftWrapper>
          <NameIntro>Hello, My name is </NameIntro>
          <Name>Nwafor Chukwuka Micah</Name>
          <JobAnimation>
            <Jobs>
              <Job>HTML</Job>
              <Job>Style component</Job>
              <Job>React</Job>
              <Job>Express</Job>
              <Job>Node</Job>
            </Jobs>
          </JobAnimation>
          <SmallIntro>
            I design and develop services for customers of all sizes,
            specializing in creating stylish, modern websites, web services and
            online stores.
          </SmallIntro>
        </LeftWrapper>
      </Left>
      {/* right */}
      <Right>
        <Image src={Micah} alt="" />
      </Right>
    </H>
  );
}

export default Hero;
