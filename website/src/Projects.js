import React from 'react';
import styled from 'styled-components';
import grayBG from './images/grayBG.svg';

const Projects = () => {
  return (
    <ProjectsContainer>
      <div id='werewolfCont'>
        <div>put werewolf demo here and a link below</div>
      </div>
      <div id='contrapCont'>
        <div>put contraptions demo here and link below</div>
      </div>
    </ProjectsContainer>
  )
}

const ProjectsContainer = styled.div`
height: 100%;
width: 100%;
background-image: url('${grayBG}');
background-position: center;
background-repeat: no-repeat;
background-size: cover;
`

export default Projects;