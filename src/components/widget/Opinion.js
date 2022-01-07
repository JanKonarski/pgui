import { Star, StarFill } from "react-bootstrap-icons";
import { StyledOpinion } from "./styled_widget/StyledOpinion";
import {Col, Row} from "react-bootstrap";

function Opinion({description, rating, date}) {
    const maxRating = 5;
    const starsFilled = rating;
    const starsFilledList = [];
    const starsUnfilledList = [];
    for (let i = 0; i < maxRating; i++) {
        if (i < starsFilled) {
            starsFilledList.push(<StarFill/>)
        } else {
            starsUnfilledList.push(<Star/>)
        }
    }

    return (
        <StyledOpinion>
            <Row className="mx-0">
                <Col className='col-md-2 col-sm-1 px-0 stars'>
                    {starsFilledList}
                    {starsUnfilledList}
                </Col>
                <Col className='col-md-1 col-sm-1 px-0 text-start'>
                    <div id="starsCount">{rating}/{maxRating}</div>
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