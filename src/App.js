import { Routes, Route } from 'react-router-dom';
import './translations/i18n';
import { useTranslation } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Layout from './components/layout/Layout';
import Main from './pages/Main';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

export default function App() {
  const [translation, set_translation] = useTranslation();

  return (
    <Layout t={translation} set_t={set_translation} >
      <Routes>
        <Route path='/' element={<Dashboard t={translation}  />} />
        <Route path='/login' element={<Login t={translation}  />} />
      </Routes>
    </Layout>
  );
}
