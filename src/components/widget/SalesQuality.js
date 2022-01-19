import Container from 'react-bootstrap/Container';

import Widget from './Widget';
import {StyledSalesQuality} from "./styled_widget/StyledSalesQuality";
import {Col, Row} from "react-bootstrap";

export default function SalesQuality(props) {
  return(
    <StyledSalesQuality sm={6} className='col-lg-4'>
      <Container className='row justify-content-center fs-3 fw-bold m-0 title' fluid>
          {props.t('salesQualityWidget')}
      </Container>
      <Container className='row pt-2 m-0' fluid>
        <Container className='col-12 col-md-7 text-center score-info d-flex justify-content-center' style={{fontSize: '20px'}} fluid>
            {props.t('salesQuality.annualMsg')}
        </Container>
        <Container className='col-12 col-md-5 fw-bold text-center rating' style={{fontSize: '80px'}} fluid>
          4/5
        </Container>
      </Container>
      <Container className='row text-center pt-2 m-0' fluid>
        <span className='to-improve'> {props.t('salesQuality.improvement')}</span>
            <Row className="px-0 gx-0 ">
                <Col className="rating">Courtesy time</Col>
                <Col className="rating">Management</Col>
                <Col className="rating">Meticulousness</Col>
            </Row>
      </Container>
    </StyledSalesQuality>
  );
}