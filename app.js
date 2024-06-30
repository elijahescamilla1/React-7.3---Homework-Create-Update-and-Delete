import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateCar from './CreateCar';
import UpdateCar from './UpdateCar';
import DeleteCar from './DeleteCar';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/create" component={CreateCar} />
        <Route path="/update/:id" component={UpdateCar} />
        <Route path="/delete/:id" component={DeleteCar} />
      </Switch>
    </Router>
  );
};

export default App;
