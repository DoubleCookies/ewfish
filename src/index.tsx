import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './Main';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Maps from "./Maps";

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ScrollToTop>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/maps" component={Maps} />
        </Switch>
      </ScrollToTop>
    </BrowserRouter>
  </React.StrictMode>
);
