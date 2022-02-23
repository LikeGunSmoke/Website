import { useRef, useEffect } from 'react';
import Logo from './Logo.js';
import ToggleThemeButton from './ToggleThemeButton.js';
import styled from 'styled-components';
import useWindowDimensions from './hooks/useWindowDimensions.js';
import { gsap } from 'gsap';
import { ScrollToPlugin } from './utils/gsap/ScrollToPlugin.js';
gsap.registerPlugin(ScrollToPlugin);

export default function Navigation({ currentTheme,handleToggleTheme }) {

  const about = useRef();
  const projects = useRef();
  const contact = useRef();
  const resume = useRef();

  const { width } = useWindowDimensions();

  useEffect(() => {

    const revealAnimation = gsap.fromTo([about.current, projects.current, contact.current, resume.current], {y: -75}, {y: 0, duration: 1, stagger: 0.2});

    return () => {
      revealAnimation.kill();
    };

  }, );

  return (

    <>
    {width >= 1200 &&
      <LogoContainer
        onClick={() => gsap.to(window, {scrollTo: "#landingPage", duration: 2})}
      >
        <LogoBorder />
        <Logo currentTheme={currentTheme} />
      </LogoContainer>
    }
    <Container>

      <ToggleThemeContainer onClick={handleToggleTheme}>
        <ToggleThemeButton currentTheme={currentTheme} handleToggleTheme={handleToggleTheme} />
      </ToggleThemeContainer>

      <About ref={about}
        onClick={() => gsap.to(window, {scrollTo: "#about", duration: 2})}
      >
        about
      </About>

      <Projects ref={projects}
        onClick={() => gsap.to(window, {scrollTo: "#contraptions", duration: 2})}
      >
        projects
      </Projects>

      <Contact ref={contact}
        onClick={() => gsap.to(window, {scrollTo: "#contact", duration: 2})}
      >
          contact
      </Contact>

      <Resume ref={resume} >
        <ResumeLink href="https://elasticbeanstalk-us-east-2-366639381743.s3.us-east-2.amazonaws.com/RobertStrangeResume.pdf" target="_blank" >resume</ResumeLink>
      </Resume>

    </Container>
    </>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0;
  height: 55px;
  width: 100%;
  display: grid;
  grid-template-areas:
  "about projects contact resume logo";
  grid-template-columns: 20% 20% 20% 20% 20%;
  background-color: ${props => props.theme.bg_Dark};
  border-bottom: 5px solid ${props => props.theme.nav_Border};
  z-index: 98;
`
const About = styled.div`
  grid-area: about;
  height: 100%;
  width: 100%;
  place-self: center;
  display: flex;
  justify-content: end;
  align-items: center;
  color: ${props => props.theme.text};
  font-size: 2.65vw;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
    color: ${props => props.theme.text_Hover};
  }
`
const Projects = styled.div`
  grid-area: projects;
  height: 100%;
  width: 100%;
  place-self: center;
  display: flex;
  justify-content: end;
  align-items: center;
  color: ${props => props.theme.text};
  font-size: 2.65vw;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
    color: ${props => props.theme.text_Hover};
  }
`
const Contact = styled.div`
  grid-area: contact;
  height: 100%;
  width: 100%;
  place-self: center;
  display: flex;
  justify-content: end;
  align-items: center;
  color: ${props => props.theme.text};
  font-size: 2.65vw;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
    color: ${props => props.theme.text_Hover};
  }
`
const Resume = styled.div`
  grid-area: resume;
  height: 100%;
  width: 100%;
  place-self: center;
  display: flex;
  justify-content: end;
  align-items: center;
  color: ${props => props.theme.text};
  font-size: 2.65vw;
`
const ResumeLink = styled.a`
&:link {
  color: ${props => props.theme.text};
  text-decoration: none;
}
&:visited {
  color: ${props => props.theme.text};
  text-decoration: none;
}
&:hover {
  text-decoration: underline;
  color: ${props => props.theme.text_Hover};
}
`
const LogoContainer = styled.div`
position: fixed;
top: 0%;
left: 87%;
height: 150px;
width: 150px;
background-color: ${props => props.theme.bg_Dark};
border-bottom: 5px solid ${props => props.theme.nav_Border};
z-index: 99;
&:hover {
  cursor: pointer;
}
`
const LogoBorder = styled.div`
position: absolute;
height: 100px;
width: 100%;
top: 36.5%;
left: -3.3%;
border-left: 5px solid ${props => props.theme.nav_Border};
border-right: 5px solid ${props => props.theme.nav_Border};
z-index: -1;
`
const ToggleThemeContainer = styled.div`
position: absolute;
top: 5%;
left: 3%;
height: 40px;
width: 2.65vw;
z-index: 99;
`