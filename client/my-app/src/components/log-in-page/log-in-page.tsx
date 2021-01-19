import { useState } from 'react';
import { navigate } from '@reach/router';
import Header from '../../header';
import './log-in-page.css';

function LogIn(props: object) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  function handlePassword(e: any) {
    setPassword(e.target.value);
  }
  function handleEmail(e: any) {
    setEmail(e.target.value);
  }
  function handleSubmit(e: any) {
    e.preventDefault();
    const newUser: object = {
      email: email,
      password: password,
    };
    console.log(newUser);
    return true;
  }
  return (
    <div className="main">
      <Header />
      <div className="container">
        <div className="form-box">
          <div className="header">LogIn</div>
          <form
            className="form"
            onSubmit={async (event) => {
              const handeled = await handleSubmit(event);
              if (handeled === true) navigate('/homepage/1');
            }}
          >
            <div className="input-container">
              <div className="request">ENTER EMAIL ADDRESS:</div>

              <input
                type="text"
                name="Email"
                value={email}
                onChange={handleEmail}
              />
            </div>
            <div className="input-container">
              <div className="request">ENTER PASSWORD:</div>
              <input
                type="text"
                name="Password"
                value={password}
                onChange={handlePassword}
              />
            </div>
            <button
              className="redirect"
              type="submit"
              value="Submit"
              onChange={async (event) => {
                const handeled = await handleSubmit(event);
                if (handeled === true) navigate('/homepage/1');
              }}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
