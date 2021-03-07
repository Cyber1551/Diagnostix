import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import { Router, Route, Switch, BrowserRouter, useHistory } from "react-router-dom";
import DashboardScreen from './screens/DashboardScreen';
import ProtectedRoute from './components/ProtectedRoute';
import { UserContext } from './context/UserContext';

import 'antd/dist/antd.css';
import TopBarComponent from './components/TopBarComponent';
import { CardContext } from './context/CardContext';

function App() {
  const history = useHistory();
  return (
    <div className="App">
      <BrowserRouter>
        <UserContext>
          <CardContext>
         <TopBarComponent />
          <Switch>
            <Route path="/login">
              <LoginScreen />
            </Route>
            <Route path="/register">
              <RegisterScreen />
            </Route>
            <ProtectedRoute path="/" component={DashboardScreen} />
          </Switch>
          </CardContext>
        </UserContext>
      </BrowserRouter>

    </div>
  );
}

export default App;
