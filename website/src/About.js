import React from 'react';
import styled from 'styled-components';

import blackBG from './images/blackBG.svg';


const About = () => {
  return (
    <AboutContainer>
      <AboutMe>
        <AboutHeader>About Me</AboutHeader>
        <AboutPar>
          Some stuff about me goes here.
        </AboutPar>
      </AboutMe>
    </AboutContainer>
  )
}

const AboutContainer = styled.div`
  height: 100%;
  width: 100%;
  background-image: url('${blackBG}');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`
const AboutMe = styled.div`
  height: 100%;
  width: 100%;
`
const AboutHeader = styled.h2`
  color: red;
`
const AboutPar = styled.p`
  color: red;
`

export default About;