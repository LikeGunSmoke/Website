import { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { SplitText } from './utils/gsap/SplitText';
import { TextPlugin } from './utils/gsap/TextPlugin';
gsap.registerPlugin(SplitText, TextPlugin);

export default function Welcome() {

  const text = useRef();
  const scroll = useRef();

  useEffect(() => {

    let split_text = new SplitText(text.current, {type: 'lines'});
    let split_scroll = new SplitText(scroll.current, {type: 'chars'});

    const textAnimation = gsap.fromTo(split_text.lines, {y: -450}, {delay: 15, duration: 3, y: 0, visibility: 'visible', rotationX: 720, ease: 'bounce'}, 0, () => split_text.revert());

    const scrollAnimation = gsap.fromTo(split_scroll.chars, {x: -400}, {delay: 15, duration: 2, x: 0, visibility: 'visible', rotation: 360, stagger: 0.09, ease: 'power2'}, 1, () => split_scroll.revert());

    return () => {
      textAnimation.kill();
      scrollAnimation.kill();
    };

  }, []);

  return (
    <BG>
      <Text ref={text} >
        Welcome to my playground and portfolio!
      </Text>
      <Scroll ref={scroll} >
        Scroll down for some fun projects.
      </Scroll>
    </BG>
  );
};

const BG = styled.div`
display: grid;
grid-template-areas:
". . . "
". welcome ."
". scroll .";
height: 100%;
width: 100%;
position: relative;
background: black;
`
const Text = styled.div`
grid-area: welcome;
font-family: 'Special Elite', cursive;
font-size: 3em;
color: white;
visibility: hidden;
`
const Scroll = styled.div`
grid-area: scroll;
font-family: 'Special Elite', cursive;
font-size: 2em;
color: white;
visibility: hidden;
`