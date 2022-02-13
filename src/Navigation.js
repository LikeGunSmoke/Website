import { useRef, useEffect } from 'react';
import Logo from './Logo.js';
import styled from 'styled-components';
import useWindowDimensions from './hooks/useWindowDimensions.js';
import { gsap } from 'gsap';
import { ScrollToPlugin } from './utils/gsap/ScrollToPlugin.js';
gsap.registerPlugin(ScrollToPlugin);

export default function Navigation() {

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
        <Border />
        <Logo />
      </LogoContainer>
    }
    <Container>

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
        <ResumeLink href="./files/RobertStrangeResume.pdf" target="_blank" >resume</ResumeLink>
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
  background-color: #050829;
  border-bottom: 5px solid #12B85F;
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
  color: #84C3CC;
  font-size: 2.65vw;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
    color: #0EAD64;
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
  color: #84C3CC;
  font-size: 2.65vw;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
    color: #0EAD64;
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
  color: #84C3CC;
  font-size: 2.65vw;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
    color: #0EAD64;
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
  color: #84C3CC;
  font-size: 2.65vw;
`
const ResumeLink = styled.a`
&:link {
  color: #84C3CC;
  text-decoration: none;
}
&:visited {
  color: #84C3CC;
  text-decoration: none;
}
&:hover {
  text-decoration: underline;
  color: #0EAD64;
}
`
const LogoContainer = styled.div`
position: fixed;
top: 0%;
left: 87%;
height: 150px;
width: 150px;
background-color: #050829;
border-bottom: 5px solid #12B85F;
z-index: 99;
`
const Border = styled.div`
position: absolute;
height: 100px;
width: 100%;
top: 36.5%;
left: -3.3%;
border-left: 5px solid #12B85F;
border-right: 5px solid #12B85F;
z-index: -1;
`