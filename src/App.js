import "antd/dist/antd.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Popular from "./components/Popular";
import Top from "./components/Top";
import Details from "./components/Details";
function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Popular</Link>
          </li>
          <li>
            <Link to="/top">Top</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/">
          <Popular />
        </Route>
        <Route exact path="/top">
          <Top />
        </Route>
        <Route exact path="/details/:id">
          <Details />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
