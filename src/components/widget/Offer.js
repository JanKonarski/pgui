import {Col, Row} from "react-bootstrap";
import {StyledOffer} from "./styled_widget/StyledOffer";


function Offer({key, name, photo, sold, turnover, views, sortCriteria}) {
    let secondField;
    let secondFieldName;
    if (sortCriteria === 'Often bought') {
        secondField = turnover;
        secondFieldName = 'Turnover:'
    } else if (sortCriteria === 'Rarely bought') {
        secondField = views;
        secondFieldName = 'Unique views:'
    }

    return (
        <StyledOffer className>
            <Row className='mx-0 g-0 offer'>
                <Col className='col-sm-4 col-md-2'>
                    <img src={photo} className='' alt={''}/>
                </Col>
                <Col className='col-sm-8 col-md-10 description'>
                    <Row className='offer-title'>{name}</Row>
                    <Row>Sold: {sold}</Row>
                    <Row>{secondFieldName} {secondField}</Row>
                </Col>
            </Row>
        </StyledOffer>

    );
}

export default Offer;