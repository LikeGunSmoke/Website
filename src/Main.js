import Welcome from './Welcome.js';
import Werewolf from './Werewolf.js';
import Contraptions from './Contraptions.js';
import Info from './Info.js';
import styled from 'styled-components'

export default function Main() {

  return (
    <Container >
      <WelcomeWrapper>
        <Welcome />
      </WelcomeWrapper>
      <ContraptionsWrapper>
        <Contraptions />
      </ContraptionsWrapper>
      <WerewolfWrapper>
        <Werewolf />
      </WerewolfWrapper>
      <InfoWrapper>
        <Info />
      </InfoWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-areas:
  ". welcome ."
  ". contraptions ."
  ". werewolf ."
  ". info .";
  height: 100vh;
  width: 100%;
  margin: 0;
  position: relative;
`
const WelcomeWrapper = styled.div`
  grid-area: welcome;
  height: 100vh;
  width: 95%;
  margin: auto;
`
const ContraptionsWrapper = styled.div`
  grid-area: contraptions;
  height: 100vh;
  width: 100%;
`
const WerewolfWrapper = styled.div`
  grid-area: werewolf;
  height: 100vh;
  width: 100%;
`
const InfoWrapper = styled.div`
  grid-area: info;
  height: 100vh;
  width: 100%;
`