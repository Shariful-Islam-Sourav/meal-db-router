import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Meals from "./components/Meals/Meals";
import Header from "./components/Header/Header";
import NotFound from "./components/NotFound/NotFound";
import MealDetails from "./components/MealDetails/MealDetails";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/home">
          <Home/>
        </Route>
        <Route exact path="/meals">
          <Meals/>
        </Route>
        <Route exact path="/meal/:idMeal">
          <MealDetails/>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
