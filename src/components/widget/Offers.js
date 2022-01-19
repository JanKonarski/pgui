import Widget from './Widget';
import {StyledOffers} from "./styled_widget/StyledOffers";
import {Button, ButtonGroup, Card, Col, Dropdown, Row } from "react-bootstrap";
import {useTranslation} from "react-i18next";
import {useEffect, useState} from "react";
import Offer from "./Offer";
import Opinion from "./Opinion";
import spinner from "../../image/spinner.gif";
import {StyledToggleButton} from "./styled_element/StyledToggleButton";

export default function Offers(props) {

    const t = useTranslation()[0]
    const [offerType, setOfferType] = useState("Most often");
    const [sortCriteria, setSortCriteria] = useState("Sold");
    const [isLoading, setIsLoading] = useState(true);
    const [displayOffers, setDisplayOffers] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        setError(null);
        fetch(
            'http://127.0.0.1:8000/offers/0'
        ).then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error(props.t('offers.error'))
            }
        }).then((data) => {
            let offers = getSortedOffers(data);
            const offersToDisplay = 5;
            offers = offers.slice(0, offersToDisplay);
            setIsLoading(false);
            setDisplayOffers(offers);
        }).catch((error) => {
            setError(props.t('offers.error'));
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
        } else if (sortCriteria === "Unique views") {
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
            return o2['turnover'] - o1['turnover'];
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
                <Dropdown.Item className="dropdownItem" eventKey={"Sold"} active={sortCriteria==="Sold"}>{props.t('offers.sold')}</Dropdown.Item>
                <Dropdown.Item className="dropdownItem" eventKey={"Turnover"} active={sortCriteria==="Turnover"}>{props.t('offers.turnover')}</Dropdown.Item>
            </Dropdown.Menu>;
    } else if (offerType === "Least often") {
        dropDownMenuContent =
            <Dropdown.Menu className='menu'>
                <Dropdown.Item className="dropdownItem" eventKey={"Sold"} active={sortCriteria==="Sold"}>{props.t('offers.sold')}</Dropdown.Item>
                <Dropdown.Item className="dropdownItem" eventKey={"Unique views"} active={sortCriteria==="Unique views"}>{props.t('offers.views')}</Dropdown.Item>
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
            <h1 className='fw-bold'>{props.t('offers.noOffers')}</h1>
            <p className='no-opinions-info'>{props.t('offers.info')}</p>
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

    function getSortCriteria() {
            if (sortCriteria === 'Sold'){
                return props.t('offers.sold')
            }else{
                return props.t('offers.turnover')
            }
    }

    return(
    <StyledOffers className='col-lg-6'>
      <Card.Body>
        <Card.Title className="row justify-content-center fs-3 fw-bold m-0">{props.t('offersRankingWidget')}</Card.Title>
          <Row className=' controls'>
              <Col className='col-12 col-md-4 text-center text-md-start px-0 mx-0'>
                  <ButtonGroup toggle className="buttons">
                      <StyledToggleButton id="button1" type="radio" className=" toggleButton text-nowrap Btn-Blue-BG button" value="Most often" checked={offerType === "Most often"}
                                    name="offerType" onClick={() => offerTypeHandler("Most often")}>{props.t('offers.mo')}</StyledToggleButton>
                      <StyledToggleButton id="button2" type="radio" className=" button toggleButton text-nowrap Btn-Blue-BG" value="Least often" checked={offerType === "Least often"}
                                    name="offerType" onClick={() => offerTypeHandler("Least often")}>{props.t('offers.lo')}</StyledToggleButton>
                  </ButtonGroup>
              </Col>
              <Col className='col-12 col-md-8 px-0 mx-0 sortButton'>
                  <Dropdown className='text-end' align={"end"} onSelect={sortCriteriaHandler}>
                      <Dropdown.Toggle className="button">
                          {getSortCriteria()}
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