import React, { useState } from 'react';
import styled from 'styled-components';

import InfiniteScroll from 'react-infinite-scroll-component';
import About from './About.js';
import Projects from './Projects.js';
import Contact from './Contact.js';


const Main = () => {

  let pages = [<About />, <Projects />, <Contact />];
  const [page, setPage] = useState(0);

  return (
    <MainContainer >

      <InfiniteScroll
        dataLength={pages.length}
        next={() => setPage( page + 1)}
        hasMore={true}
        style={{height: '90%', width: '90%', overflow: 'hidden'}}
      >
        {pages.map((pg, i) => {
          return (
            <PageContainer key={i}>{pg}</PageContainer>
          )
        })}
      </InfiniteScroll>
    </MainContainer>
  )
}

const MainContainer = styled.div`
  height: 90vh;
  width: 90vw;
  margin-left: 10%;
`
const PageContainer = styled.div`
  height: 90vh;
  width: 90vw;
  overflow: hidden;
  margin-bottom: 10%;
`

export default Main;