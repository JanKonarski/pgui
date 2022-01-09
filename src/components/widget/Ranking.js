import Widget from './Widget';
import {StyledRanking} from "./styled_widget/StyledRanking";
import {Card, Col, Dropdown, Row} from "react-bootstrap";
import offerImage from "../../image/chiken.png"
import {useTranslation} from "react-i18next";
import {useEffect, useState} from "react";
import RankingOffer from "./RankingOffer";

export default function Ranking() {
    const errorMessage = "Something went wrong - could not load offers.";
    const t = useTranslation()[0]
    const [sortCriteria, setSortCriteria] = useState("OftenSold");
    const [isLoading, setIsLoading] = useState(true);
    const [offers, setOffers] = useState([]);
    const [error, setError] = useState(null);

    // useEffect(() => {
    //     let photo;
    //     fetch(
    //         'http://127.0.0.1:8000/photo'
    //     ).then(response => {
    //         if (!response.ok) {
    //             throw new Error(errorMessage);
    //         }
    //         response.blob().then(blobResponse => {
    //             photo = URL.createObjectURL(blobResponse);
    //         })
    //     }).catch((error) => {
    //         setError(errorMessage);
    //         setIsLoading(false);
    //     });
    // }, []);

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
            let offers = [];

            for (const key in data) {
                const offer = {
                    id: key,
                    ...data[key]
                };
                offers.push(offer);
            }

            let filteredOffers = getFilteredOffers(offers);

            filteredOffers.sort(function(o1, o2) {
                const firstDate = new Date(o1["date"])
                const secondDate = new Date(o2["date"])
                return secondDate - firstDate;
            });

            const offersToDisplay = 5;
            filteredOffers = filteredOffers.slice(0, offersToDisplay);

            setIsLoading(false);
            setOffers(filteredOffers);
        }).catch((error) => {
            setError(errorMessage);
            setIsLoading(false);
        });
    }, [sortCriteria]);

    function getFilteredOffers() {

    }

  return(
    <StyledRanking className='col-md-6'>
      <Card.Body>
        <Card.Title className="row justify-content-center fs-3 fw-bold m-0">Offers ranking</Card.Title>
          <Dropdown className='text-end' align={"end"}>
              <Dropdown.Toggle className="button categoryButton">
                  Often bought
              </Dropdown.Toggle>
              <Dropdown.Menu className="dropdown">
              </Dropdown.Menu>
          </Dropdown>

        <RankingOffer/>
        <RankingOffer/>

      </Card.Body>
    </StyledRanking>
  );
}