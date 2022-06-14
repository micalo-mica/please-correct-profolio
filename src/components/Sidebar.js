import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { toggleState } from "../atoms";

const S = styled.div`
  position: fixed;
  top: 70px;
  right: 0;
  width: 50%;
  height: calc(100vh - 70px);
  background: whitesmoke;
  transition: all 0.3s linear;
  ${({ toggle }) =>
    toggle ? `transform:translate(0)` : `transform:translate(100%); `};
  z-index: 999;
`;

const SideLinks = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Link = styled.ul`
  list-style: none;
  color: #ee9b00;
`;

const LinkItems = styled.li`
  font-size: 20px;
  font-weight: bold;
  margin: 20px 0px;
  transition: all 0.3s linear;

  &:hover {
    /* background: white; */
    /* color: var(--clr-grey-2); */
  }
`;

function Sidebar() {
  const toggle = useRecoilValue(toggleState);

  console.log(toggle);

  return (
    <S toggle={toggle}>
      <SideLinks>
        <Link>
          <LinkItems>About</LinkItems>
          <LinkItems>Projects</LinkItems>
          <LinkItems>Contact</LinkItems>
        </Link>
      </SideLinks>
    </S>
  );
}

export default Sidebar;
