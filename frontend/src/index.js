import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import { Route, Routes } from 'react-router'
import { StyledConnect } from './styles/Connect.style';
import Forum from './components/Forum';
import {StyledInfoUser} from './styles/InfoUser.style';
import { StyledListUsers } from './styles/ListUsers.style';
import '@fortawesome/fontawesome-free/css/all.css';
import './styles/index.css'

import reportWebVitals from './reportWebVitals';
 
export const getTime = (d) => {
  const newTime = (Date.now() - new Date(d));
  const minutes = Math.trunc(newTime/60000);
  const heures = Math.trunc(newTime/3600000);
  const jours = Math.trunc(newTime/86400000);
  const mois = Math.trunc(newTime/2592000000);
  const annees = Math.trunc(newTime/31536000000);
  if (minutes === 0) {
      return "moins d'une minute"
  } else if (minutes > 0 & heures === 0) {
      return `${minutes} min`
  } else if (heures > 0 & jours === 0) {
      return `${heures} h`
  } else if (jours > 0 & mois === 0) {
      return `${jours} j`
  }else if (mois > 0 & annees === 0) {
      return `${mois} mois et ${jours} j`
  } else if (annees > 0) {
    return `${annees} ans ${mois > 0 ? mois + ' mois' : heures + ' h'} `
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<StyledConnect how='login' />} />
        <Route path="/signup" element={<StyledConnect how='signup' />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/infoUser" element={<StyledInfoUser/>} />
        <Route path="/listUsers" element={<StyledListUsers/>} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
