import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import Layout from './components/Layout/Layout';
import { ThemeProvider } from '@material-ui/core';
import theme from './theme';
import LandingPage from './components/LandingPage/LandingPage';

const Home = Loadable({
  loader: () => import('./components/Home/Home'),
  loading: () => <div>Loading...</div>,
});

const App = () => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      {/* <GlobalSnackBar /> */}
      <BrowserRouter>
        <Switch>
          {/* <Layout> */}
            <React.Fragment>
              <Route exact={true} path="/" component={LandingPage} />
            </React.Fragment>
          {/* </Layout> */}
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  </ThemeProvider>
);

export default App;
