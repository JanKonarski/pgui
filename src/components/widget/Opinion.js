import { Star, StarFill } from "react-bootstrap-icons";
import { StyledOpinion } from "./styled_widget/StyledOpinion";
import {Col, Row} from "react-bootstrap";

function Opinion({description, rating, date, noOpinions}) {
    const noOpinionsClass = noOpinions === true ? 'no-opinions' : '';
    const maxRating = 5;
    const starsFilled = rating;
    const starsFilledList = [];
    const starsUnfilledList = [];
    for (let i = 0; i < maxRating; i++) {
        if (i < starsFilled) {
            starsFilledList.push(<StarFill className={noOpinionsClass}/>)
        } else {
            starsUnfilledList.push(<Star className={noOpinionsClass}/>)
        }
    }

    return (
        <StyledOpinion>
            <Row className="mx-0">
                <Col className='col-5 px-0'>
                    {starsFilledList}
                    {starsUnfilledList}
                    <span id="starsCount">{rating}/{maxRating}</span>
                </Col>

                <Col className="col-7 opinion-date text-end gx-0">
                    {date}
                </Col>
            </Row>
            <div className={noOpinionsClass}>
                {description}
            </div>
            <hr/>
        </StyledOpinion>
    );
}

export default Opinion;