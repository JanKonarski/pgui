import {Card, Col, Dropdown, Row} from "react-bootstrap";
import Opinion from "./Opinion";
import {useTranslation} from "react-i18next";
import {useEffect, useState} from "react";
import {StyledOpinions} from "./styled_widget/StyledOpinions";
import spinner from "../../image/spinner.gif"
import {Link} from "react-router-dom";

function ClientsOpinionsWidget(){
    const errorMessage = "Something went wrong - could not load opinions.";
    const t = useTranslation()[0]
    const [opinionsType, setOpinionsType] = useState("All");
    const [isLoading, setIsLoading] = useState(true);
    const [opinionsToDisplay, setOpinionsToDisplay] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        setError(null);
        fetch(
            // 'http://127.0.0.1:8000/opinions'
        'http://127.0.0.1:8000/opinions'
        ).then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error(errorMessage)
            }
        }).then((data) => {
            let opinions = [];

            for (const key in data) {
                const opinion = {
                    id: key,
                    ...data[key]
                };
                opinions.push(opinion);
            }

            let filteredOpinions = getFilteredOpinions(opinions);

            filteredOpinions.sort(function(o1, o2) {
                const firstDate = new Date(o1["date"])
                const secondDate = new Date(o2["date"])
                return secondDate - firstDate;
            });

            const opinionsToDisplay = 5;
            filteredOpinions = filteredOpinions.slice(0, opinionsToDisplay);

            setIsLoading(false);
            setOpinionsToDisplay(filteredOpinions);
        }).catch((error) => {
            setError(errorMessage);
            setIsLoading(false);
        });
    }, [opinionsType]);


    function selectHandler(e) {
        setOpinionsType(e);
        setIsLoading(true);
    }

    function getFilteredOpinions(opinions) {
        const pivot = 3;
        let filteredOpinions = [];
        if (opinionsType === "Positive") {
            filteredOpinions = getPositiveOpinions(pivot, opinions);
        } else if (opinionsType === "Negative") {
            filteredOpinions = getNegativeOpinions(pivot, opinions);
        } else if (opinionsType === "All") {
            filteredOpinions = opinions;
        }
        return filteredOpinions;
    }

    function getPositiveOpinions(pivot, opinions) {
        const positiveOpinions = []
        opinions.map(opinion => {
            if (opinion['rating'] >= pivot) {
                positiveOpinions.push(opinion)
            }
        })
        return positiveOpinions;
    }

    function getNegativeOpinions(pivot, opinions) {
        const negativeOpinions = []
        opinions.map(opinion => {
            if (opinion['rating'] < pivot) {
                negativeOpinions.push(opinion)
            }
        })
        return negativeOpinions;
    }

    function opinionsExist() {
        return opinionsToDisplay.length !== 0;
    }

    let noOpinionsContent = <Col className='text-center my-auto'>
        <h1 className='fw-bold no-opinions-header'>Brak opinii</h1>
        <p className='no-opinions-info'>Nowe opinie zostaną wyświetlone, jeśli zostaną dodane przez klientów.</p>
    </Col>

    let opinionsContent =
    <div className="opinions-container">
        {opinionsToDisplay.map((opinion => (
            <Opinion
                key={opinion.id}
                description={opinion.description}
                date={opinion.date}
                rating={opinion.rating}
            />

        )))}
    </div>;

    let content = noOpinionsContent;

    if (opinionsExist()) {
        content = opinionsContent;
    }

    if (error) {
        content =
            <Col className='my-auto'>
                <p className='error'>{error}</p>
                <Opinion
                    key={0}
                    description={"Opinion not available..."}
                    date={"X/X/X"}
                    rating={0}
                    noOpinions={true}
                />
                <Opinion
                    key={0}
                    description={"Opinion not available..."}
                    date={"X/X/X"}
                    rating={0}
                    noOpinions={true}
                />
            </Col>
    }

    if (isLoading) {
        content = <Col className='text-center my-auto'><img className='mx-auto d-block spinner' src={spinner} alt={''}/></Col>
    }

    return(
        <StyledOpinions className='col-md-6'>
            <Card.Body>
                <Card.Title className="row justify-content-center fs-3 fw-bold m-0">Clients Opinions</Card.Title>
                <Row>
                    <Col className='col-xs-12 opinions-page-container'>
                        <Link className='opinions-page' to='opinions'>Opinions page</Link>
                    </Col>
                    <Col className="col-xs-12 text-end">
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
                    {content}
                </Row>
            </Card.Body>
        </StyledOpinions>
    )
}

export default ClientsOpinionsWidget;