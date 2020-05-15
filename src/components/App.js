import React from "react";
import Home from "./Home/home";
import searchMovie from "../components/elements/SearchItems/SearchItems";
import Movie from "./Movie/Movie";
import { BrowserRouter, HashRouter, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <HashRouter>
      <React.Fragment>
        {/* <Header /> */}
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/:search" component={searchMovie} exact />
          <Route path="/movie/:movieId" component={Movie} exact />
          {/* <Route component={NotFound} /> */}
        </Switch>
      </React.Fragment>
    </HashRouter>
  );
};

export default App;
