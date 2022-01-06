import Container from 'react-bootstrap/Container';

import Widget from './Widget';

export default function DailyTips(props) {
    const t = props.t;
  return(
    <Widget className='col-md-4'>
      <Container className='row justify-content-center fs-3 fw-bold m-0' fluid>
          {t('dailyTipsWidget')}
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