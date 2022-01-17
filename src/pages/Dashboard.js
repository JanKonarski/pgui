import Container from 'react-bootstrap/Container';

import SalesQuality from '../components/widget/SalesQuality';
import DailyTips from '../components/widget/DailyTips';
import Orders from '../components/widget/Orders';
import SalesChart from '../components/widget/SalesChart';
import Ranking from '../components/widget/Offers';
import {useTranslation} from "react-i18next";
import Opinions from "../components/widget/Opinions";
import i18n from "../translations/i18n";
import {useState} from "react";

export default function Dashboard() {
  const {t} = useTranslation();

  const user = JSON.parse(window.localStorage.getItem('user'));
  const users = JSON.parse(window.localStorage.getItem('users'));

  if (user === null)
    window.location.href='/login';

  return (
    <div className='min-vh-100'>
      <Container className='pt-4 px-0 row m-0' fluid>
        <SalesQuality t={t} />
        <DailyTips t={t} language={i18n.language} />
        <Orders t={t}/>
      </Container>
      <Container className='row px-0 m-0' fluid>
        <SalesChart t={t} language={i18n.language} id={0} />
      </Container>
      <Container className='pb-6 px-0 row m-0' fluid>
        <Opinions t={t} />
        <Ranking t={t} />
      </Container>
    </div>
  );
}
