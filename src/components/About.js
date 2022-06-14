import styled, { keyframes } from "styled-components";
import Satificate from "../img/award.png";

const A = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #03071e;
  color: white;

  @media (max-width: 1024px) {
    height: 60vh;
  }
  @media (max-width: 768px) {
    height: 60vh;
  }
  @media (max-width: 480px) {
    height: 100vh;
    flex-direction: column;
    text-align: center;
  }
`;

const ALeft = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
    width: 100%;
  }
`;

const ACard = styled.div`
  width: 60%;
  height: 70vh;
  border-radius: 30px;
  align-self: center;
  box-shadow: -1px 4px 23px 0px rgba(233, 236, 239, 0.75);
  -webkit-box-shadow: -1px 4px 23px 0px rgba(233, 236, 239, 0.75);
  -moz-box-shadow: -1px 4px 23px 0px rgba(233, 236, 239, 0.75);

  @media (max-width: 1024px) {
    height: 38vh;
    width: 80%;
    margin-top: 50px;
  }
  @media (max-width: 768px) {
    height: 40vh;
    width: 80%;
    margin-top: 50px;
  }
  @media (max-width: 480px) {
    height: 40vh;
    width: 80%;
    margin-top: 50px;
  }
`;

const SkillsTitle = styled.h2`
  text-align: center;
  color: #ffba08;
  padding: 55px 0px;

  @media (max-width: 1024px) {
    padding: 35px 0px;
    font-size: 18px;
  }
  @media (max-width: 768px) {
    padding: 35px 0px;
    font-size: 18px;
  }
  @media (max-width: 480px) {
    padding: 35px 0px;
    font-size: 18px;
  }
`;

const SkillsWrapper = styled.div``;

const Skills = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;

  @media (max-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
  }
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
  }
  @media (max-width: 480px) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
  }
`;

const FrontEnd = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  text-align: start;
  margin-right: 2px;

  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
    /* gap: 10px; */
  }
  @media (max-width: 480px) {
    gap: 10px;
  }
`;
const BackEnd = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  gap: 30px;

  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
    /* gap: 10px; */
  }
  @media (max-width: 480px) {
    gap: 10px;
  }
`;

const Skill = styled.h4`
  font-size: 20px;
  font-weight: 500;

  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
    font-size: 18px;
    font-weight: 500;
  }
`;

const ARight = styled.div`
  flex: 1;

  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
    padding: 20px;
  }
`;

const ATitle = styled.h1`
  font-weight: 400;

  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;

const ASub = styled.p`
  margin: 20px 0px;

  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;

const ADesc = styled.p`
  font-weight: 300;

  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;

const Award = styled.div`
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
    display: none;
  }
`;

const AwardImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 20px;

  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;

const AwardTexts = styled.div`
  width: 70%;

  @media (max-width: 1024px) {
    width: 65%;
  }
  @media (max-width: 768px) {
    width: 60%;
  }
  @media (max-width: 480px) {
  }
`;
const AwardTitle = styled.h4`
  font-weight: bold;
  color: #555;

  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;
const AwardDesc = styled.p``;

function About() {
  return (
    <A>
      {/* left */}
      <ALeft>
        <ACard>
          <SkillsTitle>My Skills</SkillsTitle>
          {/* <SkillsWrapper> */}
          <Skills>
            <FrontEnd>
              <Skill>HTML</Skill>
              <Skill>CSS</Skill>
              <Skill>Styled Component</Skill>
              <Skill>Javascript</Skill>
            </FrontEnd>
            <BackEnd>
              <Skill>Node.js</Skill>
              <Skill>Express</Skill>
              <Skill>MongoDB</Skill>
            </BackEnd>
          </Skills>
          {/* </SkillsWrapper> */}
        </ACard>
      </ALeft>
      {/* right */}
      <ARight>
        <ATitle>About Me</ATitle>
        <ASub>Lorem ipsum dolor sit amet.</ASub>
        <ADesc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
          dolores.
        </ADesc>
        <Award>
          <AwardImage src={Satificate} />
          <AwardTexts>
            <AwardTitle>International Programmer Award</AwardTitle>
            <AwardDesc>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
              deserunt.
            </AwardDesc>
          </AwardTexts>
        </Award>
      </ARight>
    </A>
  );
}

export default About;
