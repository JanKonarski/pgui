import Container from 'react-bootstrap/Container';

import Widget from './Widget';

export default function Orders() {
  return(
    <Widget className='col-md-4'>
      <Container className='row justify-content-center fs-3 fw-bold m-0' fluid>
        Orders
      </Container>
      <Container className='row m-0 p-0' fluid>
        <Container className='col-6 p-0 fs-4'>
          <Container className='row m-0 p-0' fluid>
            <Container className='col-10'>Not paid</Container>
            <Container className='col-2'>10</Container>
          </Container>
          <Container className='row m-0 p-0' fluid>
            <Container className='col-10'>Not send</Container>
            <Container className='col-2'>20</Container>
          </Container>
          <Container className='row m-0 p-0' fluid>
            <Container className='col-10'>Returns</Container>
            <Container className='col-2'>30</Container>
          </Container>
        </Container>
        <Container className='col-6 text-center'>
          <Container className='fw-bold' style={{fontSize: '90px'}}>60</Container>
          <Container>All pending orders</Container>
        </Container>
      </Container>
    </Widget>
  );
}