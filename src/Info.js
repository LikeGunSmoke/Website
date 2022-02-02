import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Tech from './Tech.js';
import Github from './Github.js';
import LinkedIn from './LinkedIn.js';
import Email from './Email.js';
import { gsap } from 'gsap';
import img from './images/headshot.jpg';

export default function Info() {

  const aboutTitle = useRef();
  const aboutBlurb = useRef();
  const skillsTitle = useRef();
  const skillsBlurb = useRef();
  const contactTitle = useRef();
  const contactBlurb = useRef();
  const skillsSwitch = useRef();
  const contactSwitch = useRef();
  const aboutSwitch = useRef();

  const [playDecode] = useState(() => gsap.timeline({paused: true}));
  const [vis, setVis] = useState(true);

  const handleSkillsBtnClick = () => {
    skillsSwitch.current.play(0);
    playDecode.play(0);
    setVis(true);
  };

  const handleContactBtnClick = () => {
    contactSwitch.current.play(0);
    setVis(false);
  };

  const handleAboutBtnClick = () => {
    aboutSwitch.current.play(0);
    setVis(false);
  };

  useEffect(() => {

    skillsSwitch.current = gsap.timeline({paused: true});
    contactSwitch.current = gsap.timeline({paused: true});
    aboutSwitch.current = gsap.timeline({paused: true});

    skillsSwitch.current.fromTo([skillsTitle.current, skillsBlurb.current], {scale: 0}, {visibility: 'visible', scale: 1, ease: 'back'}, 0.2)
    .to([aboutTitle.current, aboutBlurb.current], {visibility: 'hidden'}, 0)
    .to([contactTitle.current, contactBlurb.current], {visibility: 'hidden'}, 0);

    aboutSwitch.current.fromTo([aboutTitle.current, aboutBlurb.current], {scale: 0}, {visibility: 'visible', scale: 1, ease: 'back'}, 0.2)
    .to([skillsTitle.current, skillsBlurb.current], {visibility: 'hidden'}, 0)
    .to([contactTitle.current, contactBlurb.current], {visibility: 'hidden'}, 0);

    contactSwitch.current.fromTo([contactTitle.current, contactBlurb.current], {scale: 0}, {visibility: 'visible', scale: 1, ease: 'back'}, 0.2)
    .to([skillsTitle.current, skillsBlurb.current], {visibility: 'hidden'}, 0)
    .to([aboutTitle.current, aboutBlurb.current], {visibility: 'hidden'}, 0);

    return () => {
      skillsSwitch.current.kill();
      aboutSwitch.current.kill();
      contactSwitch.current.kill();
    };

  }, []);

  return (
    <InfoCont >

      <PhotoContainer>
        <Photo src={img} alt='headshot' />
      </PhotoContainer>

      <AboutTitle ref={aboutTitle} >About Me</AboutTitle>
      <AboutBlurb ref={aboutBlurb} >
        <AboutText>
          Hiyya! Robert Strange here, I'm a nerdy explorer with an artisitc bent. When I'm not Jeepin' through red rock canyons in Moab or hiking the high Unitas with my daughter I'm doodling, animating, or experimenting with various libraries and frameworks. Got an idea? Let's build it together!
        </AboutText>
      </AboutBlurb>
      <AboutBtn onClick={handleAboutBtnClick} >About Me</AboutBtn>

      <SkillsTitle ref={skillsTitle} >Skills</SkillsTitle>
      <SkillsBlurb ref={skillsBlurb} >
        {vis && <Tech timeline={playDecode} index={0.5} />}
      </SkillsBlurb>
      <SkillsBtn onClick={handleSkillsBtnClick} >Skills</SkillsBtn>

      <ContactTitle ref={contactTitle} >Contact</ContactTitle>
      <ContactBlurb ref={contactBlurb} >
        <GHLink href="https://www.github.com/LikeGunSmoke/">
          <Github />
        </GHLink >
        <LILink href="https://www.linkedin.com/in/robert-strange-dev/">
          <LinkedIn />
        </LILink >
        <EmailLink href="mailto:robert.strangecs@gmail.com">
          <Email />
        </EmailLink >
      </ContactBlurb>
      <ContactBtn onClick={handleContactBtnClick} >Contact</ContactBtn>

    </InfoCont>
  );
};

const InfoCont = styled.div`
  display: grid;
  grid-template-areas:
  "photo photo title title"
  "photo photo blurb blurb"
  "photo photo blurb blurb"
  "aboutBtn SkillsBtn contactBtn .";
  grid-template-rows: 25% 25% 25% 25%;
  grid-template-columns: 25% 25% 25% 25%;
  height: 100%;
  width: 100%;
`
const PhotoContainer = styled.div`
  grid-area: photo;
  height: 80%;
  width: 80%;
  place-self: center;
  border-radius: 5%;
  background-color: rgba(191, 191, 191, 1);
  box-shadow: 10px 10px 10px 5px #999;
`
const Photo = styled.img`
  height: 90%;
  width: 90%;
  margin-left: 5%;
  margin-top: 5%;
  border-radius: 5%;
`
const AboutBlurb = styled.div`
  grid-area: blurb;
  place-self: center;
  height: 90%;
  width: 90%;
  background: grey;
  font-size: 1em;
  line-height: 3em;
  border-radius: 5%;
  background-color: rgba(191, 191, 191, 1);
  overflow: auto;
  box-shadow: 10px 10px 10px 5px #999;
`
const AboutTitle = styled.div`
  grid-area: title;
  display: flex;
  place-self: center;
  justify-content: center;
  align-items: center;
  font-size: 4em;
  height: 90%;
  width: 90%;
  text-decoration: underline;
`
const AboutText = styled.p`
  font-size: 1.5em;
  margin: 5%
`
const AboutBtn = styled.button`
  grid-area: aboutBtn;
  place-self: center;
  text-align: center;
  height: 50%;
  width: 50%;
  border-radius: 10%;
  background-color: rgba(191, 191, 191, 1);
  &:hover {
    transform: scale(1.2);
    color: red;
    text-decoration: underline;
  }
`
const SkillsTitle = styled.div`
  grid-area: title;
  display: flex;
  place-self: center;
  justify-content: center;
  align-items: center;
  font-family: 'Iceland', cursive;
  color: black;
  font-size: 6em;
  text-decoration: underline;
  height: 90%;
  width: 90%;
  visibility: hidden;
`
const SkillsBlurb = styled.div`
  grid-area: blurb;
  place-self: center;
  height: 90%;
  width: 90%;
  background: black;
  border-radius: 5%;
  box-shadow: 10px 10px 10px 5px #999;
  overflow: hidden;
  visibility: hidden;
`
const SkillsBtn = styled.button`
  grid-area: SkillsBtn;
  place-self: center;
  text-align: center;
  height: 50%;
  width: 50%;
  border-radius: 10%;
  background-color: rgba(191, 191, 191, 1);
  &:hover {
    transform: scale(1.2);
    color: red;
    text-decoration: underline;
  }
`
const ContactTitle = styled.div`
  grid-area: title;
  display: flex;
  place-self: center;
  justify-content: center;
  align-items: center;
  font-size: 4em;
  height: 90%;
  width: 90%;
  visibility: hidden;
  text-decoration: underline;
`
const ContactBlurb = styled.div`
  grid-area: blurb;
  display: grid;
  grid-template-areas:
  ". github . email"
  ". linkedIn . resume";
  grid-template-rows: 50% 50%;
  grid-template-columns: 5% 45% 5% 45%;
  place-self: center;
  height: 90%;
  width: 90%;
  background: grey;
  border-radius: 5%;
  background-color: rgba(191, 191, 191, 1);
  box-shadow: 10px 10px 10px 5px #999;
  visibility: hidden;
`
const ContactBtn = styled.button`
  grid-area: contactBtn;
  place-self: center;
  text-align: center;
  height: 50%;
  width: 50%;
  border-radius: 10%;
  background-color: rgba(191, 191, 191, 1);
  &:hover {
    transform: scale(1.2);
    color: red;
    text-decoration: underline;
  }
`
const GHLink = styled.a`
  grid-area: github;
  height: 100%;
  width: 100%;
`
const LILink = styled.a`
  grid-area: linkedIn;
  height: 100%;
  width: 100%;
`
const EmailLink = styled.a`
  grid-area: email;
  height: 100%;
  width: 100%;
  z-index: 5;
`