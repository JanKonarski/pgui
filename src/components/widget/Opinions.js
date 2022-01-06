import {Card, Col, Container, Dropdown, Row} from "react-bootstrap";
import widgetClasses from "../widget/Widget.module.css";
import classes from "./ClientsOpinions.module.css"
import { Start } from "react-bootstrap-icons";
import Opinion from "./Opinion";
import {useTranslation} from "react-i18next";
import {useState} from "react";

function ClientsOpinionsWidget(){
    const t = useTranslation()[0]
    const [opinionsType, setOpinionsType] = useState("all")
    let opinion1 = "Produkty wystawione przez sprzedawcę takie sobie, ale za to cena nie jest taka wysoka. ";
    let opinion2 = "";
    let opinion3 = "Cóż napisać ... jestem bardzo zadowolony. Szukałem w sieci różnych rozwiązań i trafiłem przez przypadek na tego sprzedawcę. Po zapoznaniu się z możliwościami sklepu dokonałem zakupu - cena niewielka - w sumie dużo nie ryzykowałem - brak umów więc w razie czego tylko utopione kilka złotych. Jednak się nie zawiodłem. Zarówno możliwości sklepu jak i jego obsługa posprzedaży są na najwyższym poziomie. Właśnie kupuję kolejny towar i jak najbardziej mogę wszystkim polecić. Bardzo dobra cena w stosunku do jakości.";
    let opinion4 = "O ile obsługa w sklepie jest ok, o tyle dział rat w arogancki i w ogóle nie wykazujący zainteresowania klientem, obsługa “z musu\", suma sumarum zrezygnowałem z zakupu produktu, który miałem na oku. A wielka szkoda, bo długo przymierzałem się...";
    let opinion5 = "Jest ok";
    let date = "20.11.2021, 21:37";
    let stars = [3, 4, 5, 1, 3];

    function selectHandler(e) {
        setOpinionsType(e);
    }

    return(
        <ClientsOpinionsStyled>
            <Card.Body>
                <Container>
                    <Card.Title className={widgetClasses.titleStyle}> {t("clientsOpinionsW")}</Card.Title>
                    <Row>
                        <div className={classes.flex}>
                            <Dropdown align={"end"} onSelect={selectHandler}>
                                <Dropdown.Toggle className={classes.dropDown}>
                                    {opinionsType}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item eventKey={"all"} active={opinionsType==="all"}> {t("clientsOpinions.a")}</Dropdown.Item>
                                    <Dropdown.Item eventKey={"positive"} active={opinionsType==="positive"}> {t("clientsOpinions.p")}</Dropdown.Item>
                                    <Dropdown.Item eventKey={"negative"} active={opinionsType==="negative"}> {t("clientsOpinions.n")}</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </Row>
                    <Row>
                        <Opinion description={opinion1} date={date} stars={stars[0]}/>
                        <Opinion description={opinion2} date={date} stars={stars[1]}/>
                        <Opinion description={opinion3} date={date} stars={stars[2]}/>
                        <Opinion description={opinion4} date={date} stars={stars[3]}/>
                        <Opinion description={opinion5} date={date} stars={stars[4]}/>
                    </Row>

                </Container>

            </Card.Body>
        </ClientsOpinionsStyled>
    )
}

export default ClientsOpinionsWidget;