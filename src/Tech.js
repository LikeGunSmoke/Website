import { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrambleTextPlugin } from './utils/gsap/ScrambleTextPlugin';
gsap.registerPlugin(ScrambleTextPlugin);

export default function Tech({ timeline, index }) {

  const textFE = useRef();
  const textBE = useRef();
  const textTT = useRef();

  useEffect(() => {

    timeline.to(textFE.current, {duration: 5, scrambleText: {text: 'Javascript (ES5/ES6), React w/ Redux, GSAP 3,  React Three Fiber, HTML, CSS', chars: '01', speed: 0.3, revealDelay: 1, tweenLength: false}}, index);
    timeline.to(textBE.current, {duration: 5, scrambleText: {text: 'NodeJS, Express, MySQL, MongoDB, Mongoose', chars: '01', speed: 0.3, revealDelay: 1, tweenLength: false}}, index);
    timeline.to(textTT.current, {duration: 5, scrambleText: {text: 'Jest, Mocha/Chai, Test-Driven Development, AWS', chars: '01', speed: 0.3, revealDelay: 1, tweenLength: false}}, index);

    return () => {
      timeline.kill();
    };

  }, [timeline, index]);

  return (
    <Container>
      <Header>Front-End:</Header>
      <Text ref={textFE} >
        01001100 01101111 01101111 01101011 00100000 01100001 01110100 00100000 01111001 01101111 01110101 00100000
      </Text>
      <Header>Back-End:</Header>
      <Text ref={textBE} >
         01100111 01101111 00100000 01010011 01101000 01100101 01110010 01101100 01101111 01100011 01101011 00101100
      </Text>
      <Header>Testing/Tools</Header>
      <Text ref={textTT} >
        100100000 01101011 01110101 01100100 01101111 01110011 00100000 01100110 01101111 01110010 00100000 01100110
      </Text>
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  width: 100%;
  overflow: auto;
`
const Header = styled.h3`
  font-family: 'Iceland', cursive;
  font-size: 1.5em;
  text-decoration: underline;
  margin: 5%;
  color: white;
`
const Text = styled.p`
  font-family: 'Wallpoet', cursive;
  font-size: 1em;
  text-overflow: ellipsis;
  overflow: hidden;
  margin: 5%;
  padding: 1%;
  color: #72ec3f;
`