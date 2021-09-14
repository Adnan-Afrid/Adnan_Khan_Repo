import "./App.css";
import AppFakeAPI from "./Components/showData"
import AppNavbar from "./Components/Navbar"
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AppShowMore from "./Components/showMore";
import AppDetailsShow from "./Components/showMore";

function App() {
 
  return (
    <div className="App">
      <Router>
        <AppNavbar/>
        <Switch>
          <Route exact path="/" component={AppFakeAPI}></Route>
          <Route path="/api" component={AppDetailsShow}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
