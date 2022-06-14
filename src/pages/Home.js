import styled from "styled-components";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ProjectList from "../components/ProjectList";

const HomeContainer = styled.div`
  /* background-color: #03071e; */
`;

function Home() {
  return (
    <HomeContainer>
      <Navbar />
      <Hero />
      <About />
      <ProjectList />
      <Contact />
      <Footer />
    </HomeContainer>
  );
}

export default Home;
