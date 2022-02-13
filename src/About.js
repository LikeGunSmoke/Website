import Headshot from './Headshot.js';
import styled from 'styled-components';

export default function About() {
  return (
    <Container>
      <Photo>
        <Headshot />
      </Photo>
      <InfoContainer>
        <AboutMe>
          <Title>About</Title>
          <AboutText>
            Hiyya! Robert Strange here, I'm a nerdy explorer with an artisitc bent. When I'm not Jeepin' through red rock canyons in Moab or hiking the high Unitas with my daughter I'm doodling, animating, or experimenting with various libraries. Got an idea? Let's build it together!
          </AboutText>
        </AboutMe>
        <Skills>
          <SkillsTitle>Skills</SkillsTitle>
          <Title>Front-End:</Title>
          <SkillsText>
            Javascript (ES5/ES6), React w/ Redux, GSAP 3,  React Three Fiber, HTML, CSS
          </SkillsText>
          <Title>Back-End:</Title>
          <SkillsText>
            NodeJS, Express, MySQL, MongoDB, Mongoose
          </SkillsText>
          <Title>Testing/Tools</Title>
          <SkillsText>
            Jest, Mocha/Chai, Test-Driven Development, AWS
          </SkillsText>
        </Skills>
      </InfoContainer>
    </Container>
  );
};

const Container = styled.div`
display: grid;
grid-template-areas:
". . . . . . ."
". photo photo . info info ."
". photo photo . info info ."
". . . . . . .";
grid-template-rows: 15% 40% 40% 5%;
grid-template-columns: 5% 20% 20% 10% 20% 20% 5%;
height: 100%;
width: 100%;
overflow: auto;
`
const Title = styled.h3`
color: #84C3CC;
font-size: 2vw;
`
const SkillsTitle = styled.h2`
color: #84C3CC;
font-size: 2.5vw;
text-decoration: underline;
`
const AboutText = styled.p`
font-size: 1.7vw;
line-height: 2.2vw;
color: #84C3CC;
`
const SkillsText = styled.p`
font-size: 1.7vw;
color: #84C3CC;
`
const Photo = styled.div`
grid-area: photo;
`
const InfoContainer = styled.div`
grid-area: info;
display: grid;
grid-template-areas:
". . ."
". about ."
". skills ."
". . .";
height: 100%;
width: 100%;
`
const AboutMe = styled.div`
grid-area: about;
`
const Skills = styled.div`
grid-area: skills;
`