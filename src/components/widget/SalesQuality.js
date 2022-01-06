import Container from 'react-bootstrap/Container';

import Widget from './Widget';

export default function SalesQuality(props) {
    const t =props.t;
    return(
    <Widget className='col-md-4'>
      <Container className='row justify-content-center fs-3 fw-bold m-0' fluid>
          {t('salesQualityWidget')}
      </Container>
      <Container className='row pt-2 m-0' fluid>
        <Container className='col-6 text-center' style={{fontSize: '22px'}} fluid>
            {t('salesQuality.annualMsg')}
        </Container>
        <Container className='col-6 fw-bold text-center' style={{fontSize: '72px'}} fluid>
          4/5
        </Container>
      </Container>
      <Container className='row text-center pt-4 m-0' fluid>
        <span> {t('salesQuality.improvement')} courtesy time management meticulousness</span>
      </Container>
    </Widget>
  );
}