import './App.css';

import LoginPage from './module /login/LoginPage';
import Dashboard from './module /dashboard/Dashboard';
import VegetablesData from './common/VegetablesData';
import FruitsData from './common/FruitsData';
import SnacksData from './common/SnacksData';
import BeveragesData from './common/BeveragesData';
import Routes from './Routes';


function App() {
  const {Vegetablesproducts} = VegetablesData;
  const {Fruitsproducts} = FruitsData;
  const {Snacksproducts} = SnacksData;
  const {Beveragesproducts} = BeveragesData;
  

  return (
    <div>
    <LoginPage />
    {/* <Dashboard Vegetablesproducts = {Vegetablesproducts} Fruitsproducts= {Fruitsproducts} Snacksproducts={Snacksproducts} Beveragesproducts= {Beveragesproducts}/> */}
   
    </div>

//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/about">About</Link>
//             </li>
//             <li>
//               <Link to="/users">Users</Link>
//             </li>
//           </ul>
//         </nav>

//         {/* A <Switch> looks through its children <Route>s and
//             renders the first one that matches the current URL. */}
//         <Switch>
//           <Route path="/about">
//  <FirstPage />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
);
}

export default App;
