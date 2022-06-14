import styled, { keyframes } from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { toggleState } from "../atoms";
import { useRecoilState } from "recoil";
import { useState } from "react";

const Nav = styled.div`
  width: 100%;
  height: 70px;
  position: sticky;
  top: 0;
  background-color: #000000;
  z-index: 99;

  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;
const NavContainer = styled.div`
  height: 70px;
  max-width: 95vw;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;

const Logo = styled.h1`
  color: #fca311;

  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
    font-size: 20px;
  }
`;
const NavLinks = styled.div`
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
    display: none;
  }
`;

const Link = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;

const LinkItems = styled.li`
  margin: 20px;
  font-weight: 500;
  cursor: pointer;

  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;
const LinkButtons = styled.button`
  height: 100%;
  background: transparent;
  border-color: transparent;
  font-size: 1.1rem;
  color: #ee9b00;
  text-transform: capitalize;
  letter-spacing: 1px;
  width: 10rem;

  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;

const rotate = keyframes`
  0% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.5);
    }

    100% {
        transform: scale(1);
    }
`;

const ToggleButton = styled.button`
  font-size: 1rem;
  padding: 0.25rem 0.75rem;
  border-radius: 0.25rem;
  border-color: transparent;
  background-color: transparent;
  color: white;
  cursor: pointer;
  animation: ${rotate} 2s ease-in-out infinite;
  display: none;

  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
    display: inline;
  }
`;
const Menu = styled(MenuIcon)``;

const CloseBtn = styled(CloseIcon)`
  color: #ee9b00;
`;

function Navbar() {
  const [toggle, setToggle] = useRecoilState(toggleState);
  const [openToggle, setOpenToggle] = useState(false);

  const openS = () => {
    setToggle(!toggle);
    setOpenToggle(!openToggle);
  };

  return (
    <Nav>
      <NavContainer>
        {/* left */}
        <Logo>MICALO</Logo>
        {/* right */}
        <NavLinks>
          <Link>
            <LinkItems>
              <LinkButtons>About</LinkButtons>
            </LinkItems>
            <LinkItems>
              <LinkButtons>Projects</LinkButtons>
            </LinkItems>
            <LinkItems>
              <LinkButtons>Contact</LinkButtons>
            </LinkItems>
          </Link>
        </NavLinks>
        {/* tBTN */}
        <ToggleButton onClick={openS}>
          {toggle ? <CloseBtn /> : <Menu />}
        </ToggleButton>
      </NavContainer>
    </Nav>
  );
}

export default Navbar;
