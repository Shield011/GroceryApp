import "./App.css";
import LoginPage from "./module /login/LoginPage";
import Dashboard from "./module /dashboard/Dashboard";
import {Switch, Route} from "react-router-dom";
import Cart from "./module /cart/Cart";
import Checkout from "./module /checkout/Checkout";
import VegetablesDisplay from "./module /dashboard/VegetablesDisplay";
import FruitsDisplay from "./module /dashboard/FruitsDisplay";
import BeveragesDisplay from "./module /dashboard/BeveragesDisplay";
import SnacksDisplay from "./module /dashboard/SnacksDisplay";
import ChocolatesDisplay from "./module /dashboard/ChocolatesDispaly";
import HouseholdDisplay from "./module /dashboard/HouseholdDisplay";
import BathroomDisplay from "./module /dashboard/BathroomDisplay";
import CookingDisplay from "./module /dashboard/CookingDisplay";
import Endpage from "./module /checkout/Endpage";
import User from "./module /user-profile/User";


function App() {
  return (
    <div>
      <Switch>
        <Route exact path = "/" component = {LoginPage} />
        <Route path = "/dashboard" component = {Dashboard} />
        <Route path = "/cart" component = {Cart} />
        <Route path = "/checkout" component = {Checkout} />
        <Route path = "/endpage" component = {Endpage} />
        <Route path = "/user" component = {User} />
        <Route path = "/vegetablesdisplay" component = {VegetablesDisplay} />
        <Route path = "/fruitsdisplay" component = {FruitsDisplay} />
        <Route path = "/Beveragesdisplay" component = {BeveragesDisplay} />
        <Route path = "/Snacksdisplay" component = {SnacksDisplay} />
        <Route path = "/householddisplay" component = {HouseholdDisplay} />
        <Route path = "/bathroomdisplay" component = {BathroomDisplay} />
        <Route path = "/cookingdisplay" component = {CookingDisplay} />
        <Route path = "/chocolatesdisplay" component = {ChocolatesDisplay} />



        
      </Switch>
     
    </div>
  );
}

export default App;
