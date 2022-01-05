import Container from 'react-bootstrap/Container';

import SalesQuality from '../components/widget/SalesQuality';
import DailyTips from '../components/widget/DailyTips';
import Orders from '../components/widget/Orders';
import SalesChart from '../components/widget/SalesChart';
import Ranking from '../components/widget/Ranking';

export default function Dashboard() {


  return (
    <div>
      <Container className='pt-4 px-0 row m-0' fluid>
        <SalesQuality />
        <DailyTips />
        <Orders />
      </Container>
      <Container className='row px-0 m-0' fluid>
        <SalesChart />
      </Container>
      <Container className='pb-4 px-0 row m-0' fluid>
        <Ranking />
        <Ranking />
      </Container>
    </div>
  );
}
