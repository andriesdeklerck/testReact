import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Home from './Home';
import ConnectMetaMask from './ConnectMetaMask';
// import Contact from './Contact';

const App = () => {
  return (
    <Router>
      <Switch>
        {/* <Route exact path="/" component={Home} /> */}
        <Route path="/create" component={ConnectMetaMask} />
        {/* <Route path="/contact" component={Contact} /> */}
      </Switch>
    </Router>
  );
};

export default App;
