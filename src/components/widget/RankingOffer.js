import {Col, Row} from "react-bootstrap";
import offerImage from "../../image/chiken.png";
import {StyledRankingOffer} from "./styled_widget/StyledRankingOffer";


function RankingOffer() {
    return (
        <StyledRankingOffer>
            <Row className='mx-0 g-0 offer'>
                <Col className='col-md-2'>
                    <img src={offerImage} className='' alt={''}/>
                </Col>
                <Col className='col-md-10 description'>
                    <Row className='offer-title'>Kurczak</Row>
                    <Row>4 sery</Row>
                    <Row>4 szynki</Row>
                </Col>
            </Row>
        </StyledRankingOffer>
    );
}

export default RankingOffer;