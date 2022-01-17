import Container from 'react-bootstrap/Container';

import Widget from './Widget';
import {StyledSalesQuality} from "./styled_widget/StyledSalesQuality";

export default function SalesQuality(props) {
  return(
    <StyledSalesQuality className='col-lg-4'>
      <Container className='row justify-content-center fs-3 fw-bold m-0 title' fluid>
          {props.t('salesQualityWidget')}
      </Container>
      <Container className='row pt-2 m-0' fluid>
        <Container className='col-4 text-center score-info' style={{fontSize: '22px'}} fluid>
            {props.t('salesQuality.annualMsg')}
        </Container>
        <Container className='col-6 fw-bold text-center rating' style={{fontSize: '72px'}} fluid>
          4/5
        </Container>
      </Container>
      <Container className='row text-center pt-4 m-0' fluid>
        <span className='to-improve'> {props.t('salesQuality.improvement')}
            courtesy time management meticulousness</span>
      </Container>
    </StyledSalesQuality>
  );
}