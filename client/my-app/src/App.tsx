import React from 'react';

import './App.css';
import { Router, Link, RouteComponentProps } from '@reach/router';
import DashBoard from './components/dashboard/dashboard';
let hi: string = 'hello';
const Dash = (props: RouteComponentProps) => <DashBoard />;
function App() {
  return (
    <div className="App">
      <header>
        <Link to="/">MOOOOOOOOOD</Link>
      </header>
      <Router>
        <Dash path="/" />
      </Router>
    </div>
  );
}

export default App;
