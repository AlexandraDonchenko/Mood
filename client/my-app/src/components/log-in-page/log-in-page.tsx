import { useState } from 'react';
import { navigate } from '@reach/router';
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
    <div className="form-box">
      <form
        className="form"
        onSubmit={async (event) => {
          const handeled = await handleSubmit(event);
          if (handeled === true) navigate('/homepage/1');
        }}
      >
        <div className="input-container">
          <label>
            <div>EMAIL ADDRESS:</div>

            <input
              type="text"
              name="Email"
              value={email}
              onChange={handleEmail}
            />
          </label>
        </div>
        <div className="input-container">
          <label>
            <div>ENTER PASSWORD:</div>
            <input
              type="text"
              name="Password"
              value={password}
              onChange={handlePassword}
            />
          </label>
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
  );
}

export default LogIn;
