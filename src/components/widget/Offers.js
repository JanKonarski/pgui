import Widget from './Widget';
import {StyledOffers} from "./styled_widget/StyledOffers";
import {Button, ButtonGroup, Card, Col, Dropdown, Row, ToggleButton} from "react-bootstrap";
import {useTranslation} from "react-i18next";
import {useEffect, useState} from "react";
import Offer from "./Offer";
import Opinion from "./Opinion";
import spinner from "../../image/spinner.gif";

export default function Offers() {
    const errorMessage = "Something went wrong - could not load offers.";
    const t = useTranslation()[0]
    const [offerType, setOfferType] = useState("Most often");
    const [sortCriteria, setSortCriteria] = useState("Sold");
    const [isLoading, setIsLoading] = useState(true);
    const [displayOffers, setDisplayOffers] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        setError(null);
        fetch(
            'http://127.0.0.1:8000/offers'
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
    }, [offerType, sortCriteria]);

    function sortCriteriaHandler(e) {
        if (e !== sortCriteria) {
            setSortCriteria(e);
            setIsLoading(true);
        }
    }

    function offerTypeHandler(selectedOfferType) {
        if (selectedOfferType !== offerType) {
            setOfferType(selectedOfferType);
            setIsLoading(true);
            setSortCriteria("Sold");
        }
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

        if (sortCriteria === "Sold" && offerType === "Most often") {
            soldDecreaseSort(offers);
        } else if (sortCriteria === "Turnover") {
            turnoverDecreaseSort(offers);
        } else if (sortCriteria === "Sold" && offerType === "Least often") {
            soldIncreaseSort(offers);
        } else if (sortCriteria === "Views") {
            viewsDecreaseSort(offers);
        }
        return offers;
    }

    function soldDecreaseSort(offers) {
        offers.sort(function (o1, o2) {
            return o2['sold'] - o1['sold'];
        });
    }

    function turnoverDecreaseSort(offers) {
        offers.sort(function (o1, o2) {
            return o2['turnover'] - o2['turnover'];
        });
    }

    function soldIncreaseSort(offers) {
        offers.sort(function (o1, o2) {
            return o1['sold'] - o2['sold'];
        });
    }

    function viewsDecreaseSort(offers) {
        offers.sort(function (o1, o2) {
            return o2['views'] - o1['views'];
        });
    }

    function offersExist() {
        return displayOffers.length !== 0;
    }

    let dropDownMenuContent;
    if (offerType === "Most often") {
        dropDownMenuContent =
            <Dropdown.Menu className='menu'>
                <Dropdown.Item className="dropdownItem" eventKey={"Sold"} active={sortCriteria==="Sold"}>Sold</Dropdown.Item>
                <Dropdown.Item className="dropdownItem" eventKey={"Turnover"} active={sortCriteria==="Turnover"}>Turnover</Dropdown.Item>
            </Dropdown.Menu>;
    } else if (offerType === "Least often") {
        dropDownMenuContent =
            <Dropdown.Menu className='menu'>
                <Dropdown.Item className="dropdownItem" eventKey={"Sold"} active={sortCriteria==="Sold"}>Sold</Dropdown.Item>
                <Dropdown.Item className="dropdownItem" eventKey={"Unique views"} active={sortCriteria==="Unique views"}>Unique views</Dropdown.Item>
            </Dropdown.Menu>;
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
                        offerType={offerType}
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
          <Row className=' controls'>
              <Col className='col-12 col-md-4 text-center text-md-start px-0 mx-0'>
                  <ButtonGroup toggle className="buttons">
                      <ToggleButton id="button1" type="radio" className="button toggleButton text-nowrap" value="Most often" checked={offerType === "Most often"}
                                    name="offerType" onClick={() => offerTypeHandler("Most often")}>Most often</ToggleButton>
                      <ToggleButton id="button2" type="radio" className="button toggleButton text-nowrap" value="Least often" checked={offerType === "Least often"}
                                    name="offerType" onClick={() => offerTypeHandler("Least often")}>Least often</ToggleButton>
                  </ButtonGroup>
              </Col>
              <Col className='col-12 col-md-8 px-0 mx-0 sortButton'>
                  <Dropdown className='text-end' align={"end"} onSelect={sortCriteriaHandler}>
                      <Dropdown.Toggle className="button">
                          {sortCriteria}
                      </Dropdown.Toggle>
                      {dropDownMenuContent}
                  </Dropdown>
              </Col>
          </Row>

          <Row>
              <div className='d-flex align-items-center box'>
                {content}
              </div>
          </Row>
      </Card.Body>
    </StyledOffers>
  );
}