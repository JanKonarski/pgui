import Container from 'react-bootstrap/Container';

import Widget from './Widget';
import {StyledDailyTips} from "./StyledDailyTips";

export default function DailyTips() {
  return(
    <StyledDailyTips className='col-md-4'>
      <Container className='row justify-content-center fs-3 fw-bold m-0 title' fluid>
        Daily tips
      </Container>
      <Container className='daily-tips'>
          <Container className='pt-2' fluid>
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Container>
          <Container className='pt-2' fluid>
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Container>
          <Container className='pt-2' fluid>
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Container>
      </Container>
    </StyledDailyTips>
  );
}