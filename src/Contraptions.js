import { useRef, useEffect, useLayoutEffect } from 'react'
import styled from 'styled-components';
import video from './videos/ContraptionsDemo.mp4';
import playBtn from './images/playBtn.svg';
import { gsap } from 'gsap';
import { ScrollTrigger } from './utils/gsap/ScrollTrigger.js';
gsap.registerPlugin(ScrollTrigger);

export default function Contraptions() {

  const container = useRef();
  const reveal = useRef();
  const front = useRef();
  const back = useRef();
  const demoVideo = useRef();
  const btn = useRef();
  const flip = useRef();
  const hover = useRef();
  const btnClick = useRef();

  useLayoutEffect(() => {

    ScrollTrigger.refresh();

    const revealAnimation = gsap.to(reveal.current, {
      scrollTrigger: {
        trigger: reveal.current,
        start: 'top center',
        end: 'bottom top',
        toggleActions: 'play pause resume reset',
        onEnter: () => demoVideo.current.play(),
        onEnterBack: () => demoVideo.current.play(),
        onLeave: () => demoVideo.current.pause(),
        onLeaveBack: () => demoVideo.current.pause()
    }, duration: 1, width: '0%'});

    return () => {
      revealAnimation.scrollTrigger.kill();
    };

  }, []);

  useEffect(() => {

    flip.current = gsap.timeline({paused: true});
    hover.current = gsap.timeline({paused: true});
    btnClick.current = gsap.timeline({paused: true});

    gsap.set(back.current, {rotationX: -180});

    flip.current.to(front.current, {rotationX: -180}, 0)
    .to(back.current, {rotationX: 0}, 0);

    hover.current.to(btn.current, {scale: 1.1});

    btnClick.current.to(btn.current, {scale: 0.9})
    .to(btn.current, {scale: 1});

    return () => {
      flip.current.kill();
      hover.current.kill();
      btnClick.current.kill();
    };

  }, []);

  return (
    <ContWrapper ref={container} >
      <Reveal ref={reveal} />
      <Back ref={back} >
        <Info>
          <InfoText>
            As the sole developer I created Classic Contraptions as a fun learning experiment and homage to the games I enjoyed playing as a kid. Classic Contraptions is a 3D single played game built with React Three Fiber, Cannon JS, and Redux. Click the github link below to learn more!
          </InfoText>
          <GHLink href="https://www.github.com/LikeGunSmoke/contraptions">GitHub Repo</GHLink>
        </Info>
        <BackBtn onClick={() => flip.current.reverse()} >Go Back</BackBtn>
      </Back>
      <ContraptionsCont ref={front} >
        <ContTitle >Classic Contraptions</ContTitle>
        <ContDemo >
          <DemoVideo ref={demoVideo} muted >
            <source src={video} />
            Your browser does not support this video format
          </DemoVideo>
        </ContDemo>
        <HowBtn onClick={() => flip.current.play()} >How's it work?</HowBtn>
        <PlayBtn>
          <a href="http://www.classiccontraptions.com/">
            <BtnImg ref={btn} src={playBtn} alt='play button'
              onMouseEnter={() => hover.current.play()}
              onMouseLeave={() => hover.current.reverse()}
              onClick={() => btnClick.current.play(0)}
            />
          </a>
        </PlayBtn>
      </ContraptionsCont>
    </ContWrapper>
  );
};

const ContWrapper = styled.div`
height: 100%;
width: 100%;
display: grid;
grid-template-areas:
". . ."
". . ContraptionsCont"
". . .";
grid-template-rows: 20% 70% 10%;
grid-template-columns: 10% 10% 80%;
position: relative;
`
const ContraptionsCont = styled.div`
grid-area: ContraptionsCont;
display: grid;
grid-template-areas:
". ContTitle ContTitle ."
". ContDemo ContDemo ."
". how play .";
grid-template-rows: 20% 70% 10%;
grid-template-columns: 5% 45% 45% 5%;
background-color: rgba(189, 195, 199, 0.7);
box-shadow: 10px 10px 10px 5px #999;
backface-visibility: hidden;
`
const ContTitle = styled.div`
grid-area: ContTitle;
justify-self: center;
font-size: 1.5em;
margin-top: 5%;
font-family: 'Libre Baskerville', serif;
text-decoration: underline;
`
const ContDemo = styled.div`
grid-area: ContDemo;
border: 2px solid black;
background-color: white;
`
const Reveal = styled.div`
 height: 100%;
 width: 100%;
 position: absolute;
 grid-area: ContraptionsCont;
 background: black;
 z-index: 99;
`
const Back = styled.div`
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
grid-area: ContraptionsCont;
background-color: rgba(189, 195, 199, 0.7);
z-index: 2;
backface-visibility: hidden;
`
const HowBtn = styled.button`
grid-area: how;
height: 50%;
width: 35%;
place-self: center;
text-align: center;
border-radius: 15%;
background-color: rgba(191, 191, 191, 1);
overflow: hidden;
&:hover {
  height: 55%;
  width: 40%;
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
  height: 40%;
  width: 25%;
  color: red;
  text-decoration: underline;
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
const PlayBtn = styled.div`
grid-area: play;
height: 100%;
width: 100%;
place-self: center;
`
const BtnImg = styled.img`
height: 90%;
width: 25%;
margin-top: 0.5%;
margin-left: 50%;
`
const DemoVideo = styled.video`
grid-area: ContDemo;
height: 100%;
width: 100%;
`