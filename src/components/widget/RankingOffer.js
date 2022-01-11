import {Col, Row} from "react-bootstrap";
import {StyledRankingOffer} from "./styled_widget/StyledRankingOffer";


function RankingOffer({key, name, photo, sold, turnover, views, sortCriteria}) {
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
        <StyledRankingOffer>
            <Row className='mx-0 g-0 offer'>
                <Col className='col-md-2'>
                    <img src={photo} className='' alt={''}/>
                </Col>
                <Col className='col-md-10 description'>
                    <Row className='offer-title'>{name}</Row>
                    <Row>Sold: {sold}</Row>
                    <Row>{secondFieldName} {secondField}</Row>
                </Col>
            </Row>
        </StyledRankingOffer>
    );
}

export default RankingOffer;