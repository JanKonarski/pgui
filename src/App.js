import { Routes, Route } from 'react-router-dom';
import './translations/i18n';
import { useTranslation } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Layout from './components/layout/Layout';
import Main from './pages/Main';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import {useState} from "react";
import {ThemeProvider} from "styled-components";
import {darkTheme, lightTheme} from "./theme";
import {GlobalStyles} from "./global";

export default function App() {
  const [translation, set_translation] = useTranslation();
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
      if (theme === 'light') {
          setTheme('dark');
      } else {
          setTheme('light');
      }
  }

  return (
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles/>
        <Layout t={translation} set_t={set_translation} toggleTheme={toggleTheme} theme={theme} >
          <Routes>
            <Route path='/' element={<Dashboard t={translation}  />} />
            <Route path='/login' element={<Login t={translation}  />} />
          </Routes>
        </Layout>
      </ThemeProvider>
  );
}
