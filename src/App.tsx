import {
  BrowserRouter as Router,
  Route,
  Switch
 
} from "react-router-dom"
import AllCars from "./views/allCars/AllCars";
import Home from './views/home/Home';
import CarDetails from './views/carDetail/CarDetails';
import OrderConfig from "./views/orderConfig/OrderConfig";


function App() {
  return (
    <div >
    <Router>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/allcar">
        <AllCars />
      </Route>
      <Route exact path="/details/:id">
        <CarDetails />
      </Route>
      <Route exact path="/orderConfig">
        <OrderConfig/>
      </Route>
      
      </Switch>
      </Router>
    </div>
  );
}

export default App;
