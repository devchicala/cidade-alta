import { FC } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Form from "./components/Form";
import ListeCode from "./components/ListCode";
import Login from "./components/Login";

const Routes: FC = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Login} />
      <Route path="/form" component={Form} />
      <Route path="/listCodes" component={ListeCode} />
      <Route path="/login" exact component={Login} />
    </BrowserRouter>
  );
};

export default Routes;
