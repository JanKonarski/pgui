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

                <Col className='col-6 px-0'>
                    {starsFilledList}
                    {starsUnfilledList}
                    <span id="starsCount">{rating}/{maxRating}</span>
                </Col>

                <Col className="col-6 opinion-date text-end">
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