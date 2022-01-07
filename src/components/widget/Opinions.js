import {Card, Col, Container, Dropdown, Row} from "react-bootstrap";
import Opinion from "./Opinion";
import {useTranslation} from "react-i18next";
import {useEffect, useState, useRef} from "react";
import {StyledOpinions} from "./styled_widget/StyledOpinions";

function ClientsOpinionsWidget(){
    const t = useTranslation()[0]
    const [opinionsType, setOpinionsType] = useState("all");
    const [isLoading, setIsLoading] = useState(true);
    const [loadedOpinions, setLoadedOpinions] = useState([]);
    const [opinionsToDisplay, setOpinionsToDisplay] = useState([]);

    useEffect(() => {
        fetch(
            'http://127.0.0.1:8000/opinions'
        ).then((response) => {
            return response.json();
        }).then((data) => {
            const opinions = [];

            for (const key in data) {
                const opinion = {
                    id: key,
                    ...data[key]
                };
                // opinion['date'] = Date.parse(opinion['date']);
                opinions.push(opinion);
            }

            setIsLoading(false);
            setLoadedOpinions(opinions);
            setOpinionsToDisplay(opinions);
        });
    }, []);


    function selectHandler(e) {
        setOpinionsType(e.toString());
        console.log(opinionsType)
        filterAndSortOpinions(e);
    }

    function filterAndSortOpinions(opinionType) {
        console.log(opinionsType)
        const pivot = 3;
        let opinions = [];
        if (opinionType === "Positive") {
            opinions = getPositiveOpinions(pivot);
        } else if (opinionType === "Negative") {
            opinions = getNegativeOpinions(pivot);
        } else if (opinionType === "All") {
            opinions = getAllOpinions();
        }
        sortOpinionsByDate(opinions)
    }

    function getPositiveOpinions(pivot) {
        console.log(loadedOpinions)
        const positiveOpinions = []
        loadedOpinions.map(opinion => {
            if (opinion['rating'] >= pivot) {
                positiveOpinions.push(opinion)
            }
        })
        return positiveOpinions;
    }

    function getNegativeOpinions(pivot) {
        const negativeOpinions = []
        loadedOpinions.map(opinion => {
            if (opinion['rating'] < pivot) {
                negativeOpinions.push(opinion)
            }
        })
        return negativeOpinions;
    }

    function getAllOpinions() {
        return loadedOpinions;
    }

    function sortOpinionsByDate(opinions) {
        const opinionsToDisplayTmp = opinions.slice();
        opinionsToDisplayTmp.sort(function(o1, o2) {
            const firstDate = new Date(o1["date"])
            const secondDate = new Date(o2["date"])
            return secondDate - firstDate;
        });
        setOpinionsToDisplay(opinionsToDisplayTmp)
    }

    return(
        <StyledOpinions className='col-md-6'>
            <Card.Body>
                <Card.Title className="row justify-content-center fs-3 fw-bold m-0">Clients Opinions</Card.Title>
                <Row>
                    <Col className="text-end">
                        <Dropdown align={"end"} onSelect={selectHandler}>
                            <Dropdown.Toggle className="button categoryButton">
                                {opinionsType}
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="dropdown">
                                <Dropdown.Item className="dropdownItem" eventKey={"All"} active={opinionsType==="All"}> {t("clientsOpinions.a")}</Dropdown.Item>
                                <Dropdown.Item className="dropdownItem" eventKey={"Positive"} active={opinionsType==="Positive"}> {t("clientsOpinions.p")}</Dropdown.Item>
                                <Dropdown.Item className="dropdownItem" eventKey={"Negative"} active={opinionsType==="Negative"}> {t("clientsOpinions.n")}</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                </Row>
                <Row>
                    <div className="opinions-container">
                        {opinionsToDisplay.map((opinion => (
                            <Opinion
                                key={opinion.id}
                                description={opinion.description}
                                date={opinion.date}
                                rating={opinion.rating}
                            />

                        )))}
                    </div>
                </Row>
            </Card.Body>
        </StyledOpinions>
    )
}

export default ClientsOpinionsWidget;