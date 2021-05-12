import React from 'react';
import styled from 'styled-components';
import blackBG from './images/blackBG.svg';

const Contact = () => {
  return (
    <ContactCont id='contactCont'>
      <div>this will be a series of links and other contact info </div>
    </ContactCont>
  )
}

const ContactCont = styled.div`
  height: 100%;
  width: 100%;
  background-image: url('${blackBG}');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

export default Contact;