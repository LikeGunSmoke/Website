import Navigation from './Navigation.js';
import LandingPage from './LandingPage.js';
import Contraptions from './Contraptions.js';
import Werewolf from './Werewolf.js';
import Contact from './Contact.js';
import About from './About.js';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Montserrat', sans-serif;
  }
  h1, h2, h3 {
    font-family: 'Roboto Slab', serif;
  }
`;

export default function App() {

  return (
    <>
      <GlobalStyle />
      <Container>
        <Navigation />
        <LandingPageContainer id="landingPage" >
          <LandingPage />
        </LandingPageContainer>
        <ContraptionsContainer id="contraptions" >
          <Contraptions />
        </ContraptionsContainer>
        <WerewolfContainer id="werewolf" >
          <Werewolf />
        </WerewolfContainer>
        <ContactContainer id="contact" >
          <Contact />
        </ContactContainer>
        <AboutContainer id="about" >
          <About />
        </AboutContainer>
      </Container>
    </>
  );
};

const Container = styled.div`
  height: 100vh;
  width: 100%;
  margin: 0;
  display: grid;
  grid-template-areas:
  "landingPage"
  "contraptions"
  "werewolf"
  "contact"
  "about";
`
const LandingPageContainer = styled.div`
  grid-area: landingPage;
  height: 100vh;
  width: 100%;
  background-color: #050829;
  border-bottom: 2px solid #0EAD64;
`
const ContraptionsContainer = styled.div`
  grid-area: contraptions;
  height: 100vh;
  width: 100%;
  background-color: #0D2F57;
  border-bottom: 2px solid #0EAD64;
`
const WerewolfContainer = styled.div`
  grid-area: werewolf;
  height: 100vh;
  width: 100%;
  background-color: #050829;
  border-bottom: 2px solid #0EAD64;
`
const ContactContainer = styled.div`
  grid-area: contact;
  height: 100vh;
  width: 100%;
  background-color: #0D2F57;
  border-bottom: 2px solid #0EAD64;
`
const AboutContainer = styled.div`
  grid-area: about;
  height: 100vh;
  width: 100%;
  background-color: #050829;
`