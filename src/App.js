import { useState } from 'react';
import Navigation from './Navigation.js';
import LandingPage from './LandingPage.js';
import Contraptions from './Contraptions.js';
import Werewolf from './Werewolf.js';
import Contact from './Contact.js';
import About from './About.js';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Montserrat', sans-serif;
  }
  h1, h2, h3 {
    font-family: 'Roboto Slab', serif;
  }
  div {
    transition: background 1.5s;
  }
`;

const themes = {

  dark: {
    bg_Light: '#0D2F57',
    bg_Dark: '#050829',
    text: '#84C3CC',
    text_Hover: '#0EAD64',
    border: '#0EAD64',
    nav_Border: '#12B85F',
    link_Visited: '#12B85F',
    contact_Btn_Text: "#84C3CC"
  },
  light: {
    bg_Light: '#FFFFFF',
    bg_Dark: '#E1E4E8',
    text: '#050829',
    text_Hover: '#DB0118',
    border: '#DB0118',
    nav_Border: '#DB0118',
    link_Visited: '#008232',
    contact_Btn_Text: "#FFFFFF"
  }

};

export default function App() {

  const [currentTheme, setCurrentTheme] = useState('dark');

  const handleToggleTheme = () => {
    currentTheme === 'dark' ? setCurrentTheme('light') : setCurrentTheme('dark');
  };

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={currentTheme === 'light' ? themes.light : themes.dark}>
        <Container>
          <Navigation currentTheme={currentTheme} handleToggleTheme={handleToggleTheme} />
          <LandingPageContainer id="landingPage" >
            <LandingPage currentTheme={currentTheme} />
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
      </ThemeProvider>
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
  background-color: ${props => props.theme.bg_Dark};
  border-bottom: 2px solid ${props => props.theme.border};
`
const ContraptionsContainer = styled.div`
  grid-area: contraptions;
  height: 100vh;
  width: 100%;
  background-color: ${props => props.theme.bg_Light};
  border-bottom: 2px solid ${props => props.theme.border};
`
const WerewolfContainer = styled.div`
  grid-area: werewolf;
  height: 100vh;
  width: 100%;
  background-color: ${props => props.theme.bg_Dark};
  border-bottom: 2px solid ${props => props.theme.border};
`
const ContactContainer = styled.div`
  grid-area: contact;
  height: 100vh;
  width: 100%;
  background-color: ${props => props.theme.bg_Light};
  border-bottom: 2px solid ${props => props.theme.border};
`
const AboutContainer = styled.div`
  grid-area: about;
  height: 100vh;
  width: 100%;
  background-color: ${props => props.theme.bg_Dark};
`