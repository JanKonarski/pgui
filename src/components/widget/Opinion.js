import { Star, StarFill } from "react-bootstrap-icons";
import { StyledOpinion } from "./styled_widget/StyledOpinion";
import {Col, Row} from "react-bootstrap";

function Opinion({description, stars, date}) {
    return (
        <StyledOpinion>
            <Row className="mx-0">
                <Col className='col-md-2 col-sm-1 px-0 stars'>
                    <StarFill/>
                    <StarFill/>
                    <StarFill/>
                    <StarFill/>
                    <Star/>
                </Col>
                <Col className='col-md-1 col-sm-1 px-0 text-start'>
                    <div id="starsCount">3/5</div>
                </Col>
                <Col className="col-sm-3 col-md-9 opinion-date text-end">
                    {date}
                </Col>
            </Row>
            <div>
                {description}
            </div>
            <hr/>
        </StyledOpinion>
    );
}

export default Opinion;