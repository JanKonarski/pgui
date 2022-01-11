import Container from 'react-bootstrap/Container';

import SalesQuality from '../components/widget/SalesQuality';
import DailyTips from '../components/widget/DailyTips';
import Orders from '../components/widget/Orders';
import SalesChart from '../components/widget/SalesChart';
import Ranking from '../components/widget/Offers';
import {useTranslation} from "react-i18next";
import Opinions from "../components/widget/Opinions";

export default function Dashboard() {
    const {t} = useTranslation();

  return (
    <div>
      <Container className='pt-4 px-0 row m-0' fluid>
        <SalesQuality t={t} />
        <DailyTips t={t} />
        <Orders t={t}/>
      </Container>
      <Container className='row px-0 m-0' fluid>
        <SalesChart t={t} />
      </Container>
      <Container className='pb-6 px-0 row m-0' fluid>
        <Opinions />
        <Ranking />
      </Container>
    </div>
  );
}
