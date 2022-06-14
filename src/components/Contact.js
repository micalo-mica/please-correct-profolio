import styled, { keyframes } from "styled-components";
import Phone from "../img/phone.png";
import Email from "../img/email.png";
import Address from "../img/address.png";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";

const C = styled.div`
  height: 100vh;
  background-color: #03071e;

  @media (max-width: 1024px) {
    height: 50vh;
  }
  @media (max-width: 768px) {
    height: 50vh;
  }
  @media (max-width: 480px) {
    height: 100vh;
  }
`;

const CWrapper = styled.div`
  padding: 50px;
  display: flex;
  color: white;

  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
    flex-direction: column;
    padding: 0px 50px;
  }
`;

const CLeft = styled.div`
  flex: 1;
`;

const CTitle = styled.h1`
  font-size: 50px;
  width: 80%;

  @media (max-width: 1024px) {
    font-size: 25px;
    font-weight: bold;
  }
  @media (max-width: 768px) {
    font-size: 25px;
    font-weight: bold;
  }
  @media (max-width: 480px) {
    font-size: 30px;
    font-weight: bold;
    width: 80%;
    margin-top: 20px;
  }
`;

const CInfo = styled.div``;

const CInfoItem = styled.div`
  display: flex;
  align-items: center;
  margin: 50px 0px;
  font-weight: 300;
  width: 70%;
  color: #ee9b00;

  @media (max-width: 1024px) {
    margin: 40px 0px;
  }
  @media (max-width: 768px) {
    margin: 40px 0px;
  }
  @media (max-width: 480px) {
    margin: 25px 0px;
    width: 100%;
  }
`;
const Icon = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 20px;

  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;

const CRight = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;

const CDesc = styled.p`
  font-weight: 200;

  @media (max-width: 1024px) {
    width: 90%;
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
    display: none;
  }
`;

const B = styled.b`
  color: #ee9b00;
`;

const Form = styled.form`
  margin-top: 20px;

  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
    margin-top: 0px;
  }
`;

const Input = styled.input`
  width: 80%;
  height: 50px;
  border: none;
  border-bottom: 1px solid black;
  margin: 10px 0px;
  font-size: 14px;
  font-weight: bold;
  padding-left: 10px;
  border: 2px solid #ffd60a;
  border-radius: 5px;

  &:focus {
    outline: none;
  }

  @media (max-width: 1024px) {
    width: 80%;
    height: 40px;
    margin: 5px 0px;
  }
  @media (max-width: 768px) {
    width: 80%;
    height: 40px;
    margin: 5px 0px;
  }
  @media (max-width: 480px) {
    width: 80%;
    height: 50px;
    margin: 10px 0px;
  }
`;

const Textarea = styled.textarea`
  width: 90%;
  margin: 10px 0px;
  font-size: 14px;
  font-weight: bold;
  padding-left: 10px;
  border: 2px solid #ffd60a;
  border-radius: 5px;
  &:focus {
    outline: none;
  }

  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
    margin: 10px 0px;
    font-weight: bold;
  }
`;

const Button = styled.button`
  width: 90%;
  border: 1px solid #ffd60a;
  border-radius: 5px;
  padding: 15px;
  background-color: #ee9b00;
  color: #000000;
  font-weight: bold;
  cursor: pointer;

  @media (max-width: 1024px) {
    padding: 10px;
  }
  @media (max-width: 768px) {
    padding: 10px;
  }
  @media (max-width: 480px) {
    margin-top: 7px;
    padding: 8px;
  }
`;

const Thanks = styled.p`
  color: white;
`;

function Contact() {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_peayh5k",
        "template_h2r7orn",
        formRef.current,
        "-NjkckHoEYEBCp0iS"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <C>
      <CWrapper>
        <CLeft>
          <CTitle>Let's discuss your project</CTitle>
          <CInfo>
            <CInfoItem>
              <Icon src={Phone} />
              +234 7066445709
            </CInfoItem>
            <CInfoItem>
              <Icon src={Email} />
              nwaforchukwukamicah@gmail.com
            </CInfoItem>
            <CInfoItem>
              <Icon src={Address} />
              Anambra state
            </CInfoItem>
          </CInfo>
        </CLeft>
        {/* right */}
        <CRight>
          <CDesc>
            <B>What’s your story?</B> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </CDesc>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input type="text" placeholder="Name" name="user_name" />
            <Input type="text" placeholder="Subject" name="user_subject" />
            <Input type="text" placeholder="Email" name="user_email" />
            <Textarea rows="5" placeholder="Message" name="message" />
            <Button type="submit">Submit</Button>
            {done && <Thanks>Thank you...</Thanks>}
          </Form>
        </CRight>
      </CWrapper>
    </C>
  );
}

export default Contact;
