import { useRef, useLayoutEffect } from 'react';
import styled from 'styled-components';
import video from './videos/ContraptionsDemo.mp4';
import { gsap } from 'gsap';
import { ScrollTrigger } from './utils/gsap/ScrollTrigger.js';
gsap.registerPlugin(ScrollTrigger);

export default function Contraptions() {

  const reveal = useRef();
  const demoVideo = useRef()

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

    return () => {
      revealAnimation.scrollTrigger.kill();
    };

  }, []);

  return (
    <Container>
      <Text>Projects</Text>
      <Title>Classic Contraptions</Title>
      <Reveal ref={reveal} />
      <Video ref={demoVideo} muted onClick={() => demoVideo.current.controls=true}>
        <source src={video} />
        Your browser does not suppoer this video format.
      </Video>
      <Links>
        <GHLink href="https://www.github.com/LikeGunSmoke/contraptions" >GitHub Repo</GHLink>
        <PlayLink href="http://www.classiccontraptions.com/" >Play the game!</PlayLink>
      </Links>
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  display: grid;
  grid-template-areas:
  ". . text text"
  "title title . ."
  "video video video ."
  "video video video ."
  "links links links .";
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-rows: 10% 20% 30% 30% 10%;
  overflow: auto;
`
const Text = styled.h1`
  grid-area: text;
  margin-top: 5%;
  height: 100%;
  width: 100%;
  text-align: center;
  font-size: 5vw;
  text-decoration: underline;
  color: #84C3CC;
`
const Title = styled.h1`
  grid-area: title;
  font-size: 4vw;
  color: #84C3CC;
  align-self: end;
  margin-left: 10%;
`
const Video = styled.video`
  grid-area: video;
  height: 100%;
  width: 100%;
  object-fit: contain;
`
const Reveal = styled.div`
  grid-area: video;
  height: 100%;
  width: 100%;
  position: absolute;
  background-color: #293E4E;
  z-index: 3;
`
const Links = styled.div`
  grid-area: links;
  display: grid;
  grid-template-areas:
  "github . . play";
  grid-template-columns: 25% 25% 25% 25%;
`
const GHLink = styled.a`
  grid-area: github;
  place-self: start end;
  font-size: 2vw;
  &:link {
    color: #84C3CC;
  }
  &:visited {
    color: #12B85F;
  }
  &:hover {
    color: red;
  }
`
const PlayLink = styled.a`
  grid-area: play;
  justify-self: start;
  font-size: 2vw;
  &:link {
    color: #84C3CC;
  }
  &:visited {
    color: #12B85F;
  }
  &:hover {
    color: red;
  }
`
