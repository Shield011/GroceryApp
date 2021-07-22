import './App.css';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import LoginPage from './Components/LoginPage'
import Dashboard from './Components/Dashboard'


function App() {
  return (
    <div>
    <LoginPage />
   <Dashboard/>
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
