import Container from 'react-bootstrap/Container';

import Widget from './Widget';
import {StyledSalesQuality} from "./styled_widget/StyledSalesQuality";
import {Col, Row} from "react-bootstrap";

export default function SalesQuality(props) {
  return(
    <StyledSalesQuality className='col-lg-6 col-xxl-4'>
      <Container className='row justify-content-center fs-3 fw-bold m-0 title' fluid>
          {props.t('salesQualityWidget')}
      </Container>
      <Container className='row pt-2 m-0' fluid>
          <Container className='col-12  col-lg-11 col-xl-12 col-xxl-7 text-center score-info d-flex justify-content-center' style={{fontSize: '20px'}} fluid>
            {props.t('salesQuality.annualMsg')}
        </Container>
          <Container className='col-12 col-lg-12 col-xl-12 col-xxl-5 fw-bold text-center rating text-nowrap' style={{fontSize: '80px'}} fluid>
          4/5
        </Container>
      </Container>
        <Container className='row text-center pt-0 m-0 to-improve-container' fluid>
            <span className='to-improve'> {props.t('salesQuality.improvement')}</span>
            <Row className="px-0 gx-0 text-nowrap">
                <Col className="rating">{props.t('meticulousness')}</Col>
                <Col className="rating">{props.t('management')}</Col>
                <Col className="rating" >{props.t('courtesy')}</Col>
            </Row>
        </Container>
    </StyledSalesQuality>
  );
}