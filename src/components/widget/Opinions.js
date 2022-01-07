import {Card, Col, Container, Dropdown, Row} from "react-bootstrap";
import Opinion from "./Opinion";
import {useTranslation} from "react-i18next";
import {useEffect, useState} from "react";
import {StyledOpinions} from "./styled_widget/StyledOpinions";

function ClientsOpinionsWidget(){
    const t = useTranslation()[0]
    const [opinionsType, setOpinionsType] = useState("all")
    let opinion1 = "Produkty wystawione przez sprzedawcę takie sobie, ale za to cena nie jest taka wysoka. ";
    let opinion2 = "";
    let opinion3 = "Cóż napisać ... jestem bardzo zadowolony. Szukałem w sieci różnych rozwiązań i trafiłem przez przypadek na tego sprzedawcę. Po zapoznaniu się z możliwościami sklepu dokonałem zakupu - cena niewielka - w sumie dużo nie ryzykowałem - brak umów więc w razie czego tylko utopione kilka złotych. Jednak się nie zawiodłem. Zarówno możliwości sklepu jak i jego obsługa posprzedaży są na najwyższym poziomie. Właśnie kupuję kolejny towar i jak najbardziej mogę wszystkim polecić. Bardzo dobra cena w stosunku do jakości.";
    let opinion4 = "O ile obsługa w sklepie jest ok, o tyle dział rat w arogancki i w ogóle nie wykazujący zainteresowania klientem, obsługa “z musu\", suma sumarum zrezygnowałem z zakupu produktu, który miałem na oku. A wielka szkoda, bo długo przymierzałem się...";
    let opinion5 = "Jest okDDDDDDDDDDDDDDDDokDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDokDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDokDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDokDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDokDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDokDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD";
    let date = "20.11.2021, 21:37";
    let stars = [3, 4, 5, 1, 3];

    const [isLoading, setIsLoading] = useState(true);
    const [loadedOpinions, setLoadedOpinions] = useState([]);

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
                opinions.push(opinion);
            }


            setIsLoading(false);
            setLoadedOpinions(opinions);
        });
    }, []);

    function selectHandler(e) {
        setOpinionsType(e);
    }

    return(
        <StyledOpinions className='col-md-6'>
            <Card.Body>
                <Card.Title className="row justify-content-center fs-3 fw-bold m-0">Clients Opinions</Card.Title>
                <Row>
                    <Col className="text-end">
                        <Dropdown align={"end"} onSelect={selectHandler}>
                            <Dropdown.Toggle className="button">
                                {opinionsType}
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="dropdown">
                                <Dropdown.Item className="dropdownItem" eventKey={"All"} active={opinionsType==="all"}> {t("clientsOpinions.a")}</Dropdown.Item>
                                <Dropdown.Item className="dropdownItem" eventKey={"Positive"} active={opinionsType==="positive"}> {t("clientsOpinions.p")}</Dropdown.Item>
                                <Dropdown.Item className="dropdownItem" eventKey={"Negative"} active={opinionsType==="negative"}> {t("clientsOpinions.n")}</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                </Row>
                <Row>
                    <div className="opinions-container">
                        {loadedOpinions.map((opinion => (
                            <Opinion
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