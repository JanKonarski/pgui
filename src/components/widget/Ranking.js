import Widget from './Widget';
import {StyledRanking} from "./styled_widget/StyledRanking";
import {Card, Col, Dropdown, Row} from "react-bootstrap";
import offerImage from "../../image/chiken.png"

export default function Ranking() {
  return(
    <StyledRanking className='col-md-6'>
      <Card.Body>
        <Card.Title className="row justify-content-center fs-3 fw-bold m-0">Offers ranking</Card.Title>
          <Dropdown className='text-end' align={"end"}>
              <Dropdown.Toggle className="button categoryButton">
                  Often bought
              </Dropdown.Toggle>
              <Dropdown.Menu className="dropdown">

              </Dropdown.Menu>
          </Dropdown>
        <Row className='mx-0 g-0 offer'>
            <Col className='col-md-2'>
               <img src={offerImage} className='' alt={''} />
            </Col>
            <Col className='col-md-10 description'>
                <Row className='offer-title'>Kurczak</Row>
                <Row>4 sery</Row>
                <Row>4 szynki</Row>
            </Col>
        </Row>
          <Row className='mx-0 g-0 offer'>
              <Col className='col-md-2'>
                  <img src={offerImage} className='' alt={''} />
              </Col>
              <Col className='col-md-10 description'>
                  <Row className='offer-title'>Kurczak</Row>
                  <Row>4 sery</Row>
                  <Row>4 szynki</Row>
              </Col>
          </Row>
      </Card.Body>
    </StyledRanking>
  );
}