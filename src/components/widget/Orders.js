import Container from 'react-bootstrap/Container';
import {Card, Col, Row} from "react-bootstrap";
import {StyledOrders} from "./styled_widget/StyledOrders";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import spinner from "../../image/spinner.gif";

export default function Orders() {
    const errorMessage = "Something went wrong - could not load orders.";
    const [orders, setOrders] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      setError(null);
      fetch(
          // 'http://127.0.0.1:8000/orders'
           'http://127.0.0.1:8000/orders/0'
      ).then((response) => {
          if (response.ok) {
              return response.json();
          } else {
              throw new Error(errorMessage);
          }
      }).then((data) => {
        const orders = data;
        setIsLoading(false);
        setOrders(orders);
      }).catch((error) => {
          setError(errorMessage);
          setIsLoading(false);
      })
    }, []);

    function ordersExist() {
        delete orders["user_id"];
        return !Object.values(orders).every(orderType => orderType === 0);
    }
/* 3 -> 1 */
    function twoLeadingZeros(num) {
        return String(num).padStart(1, '0');
    }

    const noOrdersContent =
        <Card.Body className="text-center">
            <h1 className="fw-bold no-orders-header">Brak zamówień</h1>
            <Row>
                <p className='no-orders-info'>Dotrzyj do większej ilości klientów!</p>
            </Row>
            <Row className="gx-0">
                <Col>
                    <a className="no-orders-links" href="#">
                        Promowanie
                    </a>
                </Col>
                <Col>
                    <a className="no-orders-links" href="#">
                        Ankiety
                    </a>
                </Col>
                <Col>
                    <a className="no-orders-links" href="#">
                        Statystyki
                    </a>
                </Col>
            </Row>
        </Card.Body>;

    const ordersContent = <Card.Body className='ordersBody'>
        <Row>
            <Container sm={6} className='col-md-6 col-xs-12 fs-4 digits text-center'>
                <Container className='row p-0 orders' fluid>
                    <Container className='col-8 text-center'><Link className='order-link' to='not_paid'>Not paid</Link></Container>
                    <Container className='col-4 text-start digit'>{orders['unpaid']}</Container>
                </Container>
                <Container className='row m-0 p-0' fluid>
                    <Container className='col-8'><Link className='order-link' to='not_sent'>Not sent</Link></Container>
                    <Container className='col-4 text-start digit'>{orders['unsent']}</Container>
                </Container>
                <Container className='row m-0 p-0' fluid>
                    <Container className='col-8'><Link className='order-link' to='refunds'>Refunds</Link></Container>
                    <Container className='col-4 text-start digit'>{orders['refunds']}</Container>
                </Container>
            </Container>
            <Container className='col-md-6 col-xs-12 text-center'>
                <Container className='fw-bold pending-orders' style={{fontSize: '77px'}}>{twoLeadingZeros(orders['pending'])}</Container>
                <Container className='pending-orders-text' style={{fontSize: '20px'}}>All pending orders</Container>
            </Container>
        </Row>
    </Card.Body>;

    let content = <div>{noOrdersContent}</div>;

    if (ordersExist()) {
        content = ordersContent;
    }

    if (error) {
        content =
            <Col className='d-flex my-auto text-center error'>
                <h2 className='my-auto'>{error}</h2>
            </Col>
    }

    if (isLoading) {
        content = <div><img className='mx-auto d-block spinner' src={spinner} alt={''}/></div>
    }

  return(
    <StyledOrders className='col-lg-12 col-xxl-4'>
      <Card.Title className='row justify-content-center fs-3 fw-bold m-0 title' fluid>
        Orders
      </Card.Title>
      {content}
    </StyledOrders>
  );
}