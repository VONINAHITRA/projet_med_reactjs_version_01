import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import moment from 'moment';
import messages from './locale/messages';

import { addLocaleData, IntlProvider } from 'react-intl';

import en from 'react-intl/locale-data/en';
import fr from 'react-intl/locale-data/fr';
moment.locale('fr');

const supportedLanguages = ['fr-FR', 'en-EN'];

let locale: string =
  (navigator.languages && navigator.languages[0]) ||
  navigator.language ||
  'fr-FR';

if (!supportedLanguages.find((l) => l === locale)) {
  locale = 'fr-FR';
}

if (localStorage.getItem('language')) {
  locale = localStorage.getItem('language') || '';
}
addLocaleData([...en, ...fr]);
ReactDOM.render(
  <React.StrictMode>
    <IntlProvider locale={locale} messages={(messages as any)[locale]}>
      <App />
    </IntlProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
