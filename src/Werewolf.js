import { useRef, useEffect, useLayoutEffect } from 'react';
import styled from 'styled-components';
import bg from './images/villageNight.jpg';
import video from './videos/WerewolfDemo.mp4';
import logo from './images/WerewolfLogo.svg';
import { gsap } from 'gsap';
import ScrollTrigger from './utils/gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function Werewolf() {

  const container = useRef();
  const reveal = useRef();
  const front = useRef();
  const back = useRef();
  const demoVideo = useRef();
  const background = useRef();
  const flip = useRef();

  useLayoutEffect(() => {

    ScrollTrigger.refresh();

    const revealAnimation = gsap.to(reveal.current, {
      scrollTrigger: {
        trigger: reveal.current,
        start: 'top center',
        end: 'bottom top',
        toggleActions: 'play pause resume reverse',
        onEnter: () => demoVideo.current.play(),
        onEnterBack: () => demoVideo.current.play(),
        onLeave: () => demoVideo.current.pause(),
        onLeaveBack: () => demoVideo.current.pause()
      }, duration: 1, scaleY: 0, transformOrigin: 'top'});

    const backgroundAnimation = gsap.to(background.current, {
      scrollTrigger: {
        trigger: background.current,
        start: 'top center',
        end: '25% top',
        scrub: true
      }, opacity: 1});

    return () => {
      revealAnimation.scrollTrigger.kill();
      backgroundAnimation.scrollTrigger.kill();
    };

  }, []);

  useEffect(() => {

    flip.current = gsap.timeline({paused: true});

    gsap.set(back.current, {rotationX: -180});

    flip.current.to(front.current, {rotationX: -180}, 0)
    .to(back.current, {rotationX: 0}, 0);

    return () => {
      flip.current.kill();
    };

  }, []);

  return (
    <WWWrapper ref={container} >
      <Background ref={background} src={bg} alt='village background'/>
      <Reveal ref={reveal} />
      <Back ref={back} >
        <Info>
          <InfoText>
          Built with React, Express, and Socket.io on a 7 person Agile team, Werewolf is a multiplayer game based on the card game of the same name. Grab your friends and join the hunt!
          </InfoText>
          <GHLink href="https://www.github.com/HR51-Arctic/werewolf">GitHub Repo</GHLink>
        </Info>
        <BackBtn onClick={() => flip.current.reverse()} >Go back</BackBtn>
      </Back>
      <WWDemoContainer ref={front} >
        <WWTitle >
          <Logo src={logo} alt='werewolf logo'/>
        </WWTitle>
        <WWDemo>
          <DemoVideo ref={demoVideo} muted >
            <source src={video} />
            Your browser does not support this video format
          </DemoVideo>
        </WWDemo>
        <HowBtn onClick={() => flip.current.play()} >How's it work?</HowBtn>
        <PlayBtn>
          <WolfLink href="http://www.werewolfhunt.com" >
          Join the Hunt!
          </WolfLink>
        </PlayBtn>
      </WWDemoContainer>
    </WWWrapper>
  )
};

const WWWrapper = styled.div`
display: grid;
grid-template-areas:
". . . "
". WWDemoCont . "
". . . ";
height: 100%;
width: 100%;
position: relative;
grid-template-rows: 20% 70% 10%;
grid-template-columns: 10% 80% 10%;
`
const WWDemoContainer = styled.div`
grid-area: WWDemoCont;
display: grid;
grid-template-areas:
". WWTitle WWTitle ."
". WWDemo WWDemo ."
". how play .";
grid-template-rows: 20% 70% 10%;
grid-template-columns: 5% 45% 45% 5%;
background-color: rgba(189, 195, 199, 0.7);
backface-visibility: hidden;
`
const WWDemo = styled.div`
grid-area: WWDemo;
border: 2px solid black;
background-color: white;
`
const WWTitle = styled.div`
grid-area: WWTitle;
justify-self: center;
`
const Reveal = styled.div`
height: 100%;
width: 100%;
grid-area: WWDemoCont;
position: absolute;
background: black;
z-index: 99;
`
const Back = styled.div`
grid-area: WWDemoCont;
display: grid;
grid-template-areas:
". . . ."
". info info ."
". info info ."
". backBtn backBtn .";
grid-template-rows: 10% 35% 35% 20%;
grid-template-columns: 5% 45% 45% 5%;
height: 100%;
width: 100%;
postion: absolute;
background-color: rgba(189, 195, 199, 0.7);
z-index: 2;
backface-visibility: hidden;
`
const HowBtn = styled.button`
grid-area: how;
height: 50%;
width: 35%;
scale: 1;
place-self: center;
text-align: center;
border-radius: 15%;
background-color: rgba(191, 191, 191, 1);
overflow: hidden;
&:hover {
  transform: scale(1.2);
  color: red;
  text-decoration: underline;
  cursor: pointer;
}
`
const BackBtn = styled.button`
grid-area: backBtn;
height: 35%;
width: 20%;
place-self: center;
text-align: center;
border-radius: 15%;
background-color: rgba(191, 191, 191, 1);
&:hover {
  transform: scale(1.2);
  text-decoration: underline;
  color: red;
  cursor: pointer;
}
`
const Info = styled.div`
grid-area: info;
height: 100%;
width: 100%;
background: white;
overflow: auto;
`
const InfoText = styled.p`
font-size: 2em;
font-family: 'Crimson Text', serif;
line-height: 3em;
`
const GHLink = styled.a`
font-size: 1.5em;
position: absolute;
top: 75%;
&:link {
  color: black;
}
&:visited {
  color: blue;
}
&:hover {
  color: red;
}
`
const Logo = styled.img`
height: 100%;
width: 100%;
`
const WolfLink = styled.a`
&:link {
  color: black;
}
&:visited {
  color: blue;
}
&:hover {
  text-decoration: underline;
  color: red;
}
`
const PlayBtn = styled.button`
grid-area: play;
height: 50%;
width: 25%;
place-self: center;
text-align: center;
border-radius: 15%;
background-color: rgba(191, 191, 191, 1);
overflow: hidden;
&:hover {
  transform: scale(1.2);
  cursor: pointer;
}
`
const DemoVideo = styled.video`
grid-area: WWDemo;
height: 100%;
width: 100%;
`
const Background = styled.img`
height: 100vh;
width: 95%;
position: absolute;
z-index: -1;
margin: auto;
opacity: 0;
`