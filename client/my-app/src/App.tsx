import React from 'react';
import './App.css';
import { Router, Link, RouteComponentProps, Location } from '@reach/router';
import DashBoard from './components/dashboard/dashboard';
import LogIn from './components/log-in-page/log-in-page';
import SignUP from './components/sign-up-page/sign-up-page';
import Homepage from './components/home-page/home-page';
import './App.css';
const test: string = 'TEST'; // variable to try to pass down by props

//const test: string = 'Hello';
const Dash = (props: RouteComponentProps) => <DashBoard />;
const Login = (props: RouteComponentProps) => <LogIn />;
const SignUp = (props: RouteComponentProps) => <SignUP />;
const HomePage = (props: RouteComponentProps) => <Homepage />;

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Login path="log-in/*" />
        <SignUp path="sign-up/*" />
        <Dash path="/" />
        <HomePage path="/homepage/:1" />
      </Router>
    </div>
  );
};

export default App;
