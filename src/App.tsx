import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";

import "./stylesheets/main.scss";

function App() {
   return (
     <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Header/>
            <h1>Checkout</h1>
          </Route>
          <Route path="/login">
            <h1>Login page</h1>
          </Route>
          {/* Default route */}
          <Route path="/">
            <Header/>
            <Home/>
          </Route>
        </Switch>
      </div>
     </Router>
   );
}

export default App;
