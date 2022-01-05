import Container from 'react-bootstrap/Container';

import Widget from './Widget';

export default function DailyTips() {
  return(
    <Widget className='col-md-4'>
      <Container className='row justify-content-center fs-3 fw-bold m-0' fluid>
        Sales Quality
      </Container>
      <Container className='pt-2' fluid>
        Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Container>
      <Container className='pt-2' fluid>
        Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Container>
      <Container className='pt-2' fluid>
        Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Container>
    </Widget>
  );
}