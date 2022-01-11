import Widget from './Widget';
import {StyledOffers} from "./styled_widget/StyledOffers";
import {Card, Col, Dropdown, Row} from "react-bootstrap";
import {useTranslation} from "react-i18next";
import {useEffect, useState} from "react";
import Offer from "./Offer";
import Opinion from "./Opinion";
import spinner from "../../image/spinner.gif";

export default function Offers() {
    const errorMessage = "Something went wrong - could not load offers.";
    const t = useTranslation()[0]
    const [sortCriteria, setSortCriteria] = useState("Often bought");
    const [isLoading, setIsLoading] = useState(true);
    const [displayOffers, setDisplayOffers] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        setError(null);
        fetch(
            'http://127.0.0.1:8000/no_offers'
        ).then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error(errorMessage)
            }
        }).then((data) => {
            let offers = getSortedOffers(data);
            const offersToDisplay = 5;
            offers = offers.slice(0, offersToDisplay);
            setIsLoading(false);
            setDisplayOffers(offers);
        }).catch((error) => {
            setError(errorMessage);
            setIsLoading(false);
        });
    }, [sortCriteria]);

    function selectHandler(e) {
        setSortCriteria(e);
        setIsLoading(true);
    }

    function getSortedOffers(data) {
        let offers = [];
        for (const key in data) {
            const offer = {
                id: key,
                ...data[key]
            };
            offers.push(offer);
        }

        if (sortCriteria === "Often bought") {
            mostOftenBoughtSort(offers);
        } else if (sortCriteria === "Rarely bought") {
            leastOftenBoughtSort(offers);
        }
        return offers;
    }

    function mostOftenBoughtSort(offers) {
        offers.sort(function (o1, o2) {
            return o2['sold'] - o1['sold'] || o2['turnover'] - o2['turnover'];
        });
    }

    function leastOftenBoughtSort(offers) {
        offers.sort(function (o1, o2) {
            return o1['sold'] - o2['sold'] || o2['views'] - o2['views'];
        });
    }

    function offersExist() {
        return displayOffers.length !== 0;
    }

    let offersContent =
            <div className='offers-container'>
                {displayOffers.map((offer) => (
                    <Offer
                        key={offer.id}
                        photo={offer.photoBytes}
                        name={offer.name}
                        sold={offer.sold}
                        turnover={offer.turnover}
                        views={offer.views}
                        sortCriteria={sortCriteria}
                    />
                ))}

        </div>;

    let noOffersContent =
        <Col className='text-center my-auto'>
            <h1 className='fw-bold'>Brak ofert</h1>
            <p className='no-opinions-info'>Nowe oferty zostaną wyświetlone, jeśli wystawisz produkty na sprzedaż.</p>
        </Col>;

    let content = noOffersContent;

    if (offersExist()) {
        content = offersContent;
    }

    if (error) {
        content =
            <Col className='my-auto text-center error'>
                <h2 className='my-auto'>{error}</h2>
            </Col>
    }

    if (isLoading) {
        content = <img className='mx-auto align-self-center d-block spinner' src={spinner} alt={''}/>
    }

  return(
    <StyledOffers className='col-md-6'>
      <Card.Body>
        <Card.Title className="row justify-content-center fs-3 fw-bold m-0">Offers ranking</Card.Title>
          <Dropdown className='text-end ' align={"end"} onSelect={selectHandler}>
              <Dropdown.Toggle className="button sortButton">
                  {sortCriteria}
              </Dropdown.Toggle>
              <Dropdown.Menu className="dropdown">
                  <Dropdown.Item className="dropdownItem" eventKey={"Often bought"} active={sortCriteria==="Often bought"}>Often bought</Dropdown.Item>
                  <Dropdown.Item className="dropdownItem" eventKey={"Rarely bought"} active={sortCriteria==="Rarely bought"}>Rarely bought</Dropdown.Item>
              </Dropdown.Menu>
          </Dropdown>
          <Row>
              <div className='d-flex align-items-center box'>
                {content}
              </div>
          </Row>
      </Card.Body>
    </StyledOffers>
  );
}