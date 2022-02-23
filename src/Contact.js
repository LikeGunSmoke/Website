import { useRef, useLayoutEffect } from 'react';
import Email from './Email.js';
import Github from './Github.js';
import LinkedIn from './LinkedIn.js';
import styled from 'styled-components';
import img from './images/contact.svg';
import { gsap } from 'gsap';
import { ScrollTrigger } from './utils/gsap/ScrollTrigger.js';
gsap.registerPlugin(ScrollTrigger);

export default function Contact() {

  const title = useRef();
  const email = useRef();
  const github = useRef();
  const linkedIn = useRef();

  useLayoutEffect(() => {

    ScrollTrigger.refresh();

    const slideIn = gsap.from([email.current, github.current, linkedIn.current], {
      scrollTrigger: {
        trigger: email.current,
        start: 'top center',
        end: 'bottom top',
        toggleActions: 'play pause resume reverse',
      }, duration: 1, xPercent: 100, stagger: 0.2, opacity: 0
    });

    return () => {
      slideIn.scrollTrigger.kill();
    };

  }, []);

  return (
    <Container>
      <Title ref={title} src={img} alt="contact" />
      <TextContainer>
        <Text>
          Like what you see? Want to chat? Below are a few ways to get ahold of me or check out my work!
        </Text>
      </TextContainer>
      <EmailLink ref={email} href="mailto:robert.strangecs@gmail.com">
        <Email />
      </EmailLink>
      <GithubLink ref={github} href="https://www.github.com/LikeGunSmoke/" >
        <Github />
      </GithubLink>
      <LinkedInLink ref={linkedIn} href="https://www.linkedin.com/in/robert-strange-dev/" >
        <LinkedIn />
      </LinkedInLink>
    </Container>
  );
};

const Container = styled.div`
display: grid;
grid-template-areas:
". title text ."
". title email ."
". title github ."
". title linkedIn .";
grid-template-rows: 25% 25% 25% 25%;
grid-template-columns: 5% 50% 40% 5%;
height: 100%;
width: 100%;
overflow: hidden;
`
const Title = styled.img`
grid-area: title;
height: 80%;
width: 100%;
place-self: center;
`
const TextContainer = styled.div`
grid-area: text;
place-self: center;
`
const Text = styled.p`
margin-top: 10%;
font-size: 3vw;
color: ${props => props.theme.text};
`
const EmailLink = styled.a`
grid-area: email;
`
const GithubLink = styled.a`
grid-area: github;
`
const LinkedInLink = styled.a`
grid-area: linkedIn;
`
