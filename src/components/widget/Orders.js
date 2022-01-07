import Container from 'react-bootstrap/Container';
import {Card} from "react-bootstrap";
import {StyledOrders} from "./styled_widget/StyledOrders";
import {useEffect, useState} from "react";

export default function Orders() {
    const [orders, setOrders] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      fetch(
          'http://127.0.0.1:8000/orders'
          // 'http://127.0.0.1:8000/no_orders'
      ).then((response) => {
        return response.json();
      }).then((data) => {
        const orders = data;
        setIsLoading(false);
        setOrders(orders);
      })
    }, [isLoading]);

    function noOrders() {
      return Object.values(orders).every(orderType => orderType === 0);
    }

    const content = noOrders()
        ? <div>TODO</div>
        : <Card.Body>
          <Container className='row m-0 p-0' fluid>
            <Container className='col-6 p-0 fs-4'>
              <Container className='row m-0 p-0' fluid>
                <Container className='col-10'>Not paid</Container>
                <Container className='col-2'>{orders['unpaid']}</Container>
              </Container>
              <Container className='row m-0 p-0' fluid>
                <Container className='col-10'>Not send</Container>
                <Container className='col-2'>{orders['unsent']}</Container>
              </Container>
              <Container className='row m-0 p-0' fluid>
                <Container className='col-10'>Returns</Container>
                <Container className='col-2'>{orders['refunds']}</Container>
              </Container>
            </Container>
            <Container className='col-6 text-center'>
              <Container className='fw-bold' style={{fontSize: '90px'}}>{orders['pending']}</Container>
              <Container>All pending orders</Container>
            </Container>
          </Container>
        </Card.Body>;


  return(
    <StyledOrders className='col-md-4'>
      <Card.Title className='row justify-content-center fs-3 fw-bold m-0 title' fluid>
        Orders
      </Card.Title>
      {isLoading && <div>Downloading orders...</div>}
      {content}
    </StyledOrders>
  );
}