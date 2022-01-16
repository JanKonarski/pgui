import {Col, Row} from "react-bootstrap";
import {StyledOffer} from "./styled_widget/StyledOffer";


function Offer({key, name, photo, sold, turnover, views, offerType}) {
    let secondField;
    let secondFieldName;
    if (offerType === 'Most often') {
        secondField = turnover;
        secondFieldName = 'Turnover:'
    } else if (offerType === 'Least often') {
        secondField = views;
        secondFieldName = 'Unique views:'
    }

    return (
        <StyledOffer>
            <Row className='offer'>
                <Col className='col-5 col-md-2 fixed'>
                    <div className='photoContainer'>
                        <img src={photo} className='' alt={''}/>
                    </div>
                </Col>
                <Col className='col-7 col-md-10 description'>
                    <Row className='offer-title'>{name}</Row>
                    <Row>Sold: {sold}</Row>
                    <Row>{secondFieldName} {secondField}</Row>
                </Col>
            </Row>
        </StyledOffer>

    );
}

export default Offer;