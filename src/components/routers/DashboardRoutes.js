import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { DcScreen } from "../dc/DcScreen";
import { HeroScreen } from "../heroes/HeroScreen";
import { MarvelScreen } from "../marvel/MarvelScreen";
import { Navbar } from "../ui/Navbar";

export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />

      <div className="container mt-4">
        <Switch>
          <Route exact path="/marvel" component={MarvelScreen} />
          <Route exact path="/dc" component={DcScreen} />
          <Route exact path="/heroe/:heroeId" component={HeroScreen} />

          <Redirect to="/marvel" />
        </Switch>
      </div>
    </>
  );
};
