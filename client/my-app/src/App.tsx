import React from 'react';
import './App.css';
import { Router, Link, RouteComponentProps, Location } from '@reach/router';
import DashBoard from './components/dashboard/dashboard';
import LogIn from './components/log-in-page/log-in-page';
import SignUP from './components/sign-up-page/sign-up-page';
import Homepage from './components/home-page/home-page';
const test: string = 'Hello';
const Dash = (props: RouteComponentProps) => <DashBoard />;
const Login = (props: RouteComponentProps) => <LogIn />;
const SignUp = (props: RouteComponentProps) => <SignUP />;
const HomePage = (props: RouteComponentProps) => <Homepage />;

function App() {
  return (
    <div className="App">
      <header>
        <Link to="/" state={{ hello: test }}>
          MOOOOOOOOOD
        </Link>
        {/* {console.log(testEntry())} */}
        <Link to="/sign-up" className="show-me" state={{ hello: test }}>
          Sign up
        </Link>
        <Link to="/log-in">Log in</Link>
      </header>
      <Router>
        <Login path="log-in/*" />
        <SignUp path="sign-up/*" />
        <Dash path="/" />
        <HomePage path="/homepage/:id" />
      </Router>
    </div>
  );
}

export default App;
