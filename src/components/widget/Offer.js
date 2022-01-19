import {Col, Row} from "react-bootstrap";
import {StyledOffer} from "./styled_widget/StyledOffer";


function Offer({key, name, photo, sold, turnover, views, offerType,t}) {
    let secondField;
    let secondFieldName;
    if (offerType === 'Most often') {
        secondField = turnover;
        secondFieldName = t('offers.turnover')
    } else if (offerType === 'Least often') {
        secondField = views;
        secondFieldName = t('offers.views')
    }

    return (
        <StyledOffer>
                    <div className='photoContainer offer'>
                        <img src={photo} className='' alt={''}/>
                    </div>
            <Row className='offer'>
                <Col className='col-12 description'>
                    <Row className='offer-title'>{name}</Row>
                    <Row><Col className="g-0 p-0">{t('offers.sold')}:  <span className='fw-bold offer-amount'>{sold}</span></Col></Row>
                    <Row><Col className="g-0 p-0">{secondFieldName} <span className='fw-bold offer-amount'>{secondField}</span></Col></Row>
                </Col>
            </Row>
        </StyledOffer>

    );
}

export default Offer;