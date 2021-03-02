import React from 'react';
import { Route } from "react-router-dom";
import moment from 'moment';
import { useTranslation } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css';

import About from '../components/About/About';
import Contact from '../components/Contact/Contact'
import Home from '../components/Home/Home';
import Gallery from '../components/Gallery/Gallery';
import Services from '../components/Services/Services';
import NavBar from '../components/NavBar/NavBar';
import { PHONE_NUMBER } from '../shared/constants';
import { formatPhone } from '../shared/formats';
import './App.scss';

const App = () => {
  const current_date = moment().format('YYYY');
  const { t } = useTranslation();

  return (
    <div className="App">
      <div className="content">
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/services" component={Services} />
        <Route path="/gallery" component={Gallery} />
      </div>
      <footer>
        <ul>
          <li>&#169;{current_date}</li>
          <li><strong>Paint Doctor Auto</strong></li>
          <li><strong>{formatPhone(PHONE_NUMBER)}</strong></li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
