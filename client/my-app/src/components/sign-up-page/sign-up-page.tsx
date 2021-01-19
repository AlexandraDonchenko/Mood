import { ChangeEvent, useState } from 'react';
import { navigate } from '@reach/router';
import Header from '../../header';

function SignUP() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleFirstName(e: ChangeEvent<HTMLInputElement>) {
    setFirstName(e.target.value);
  }
  function handleLastName(e: any) {
    setLastName(e.target.value);
  }
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
      firstName: firstName,
      lastName: lastName,
      password: password,
    };
    console.log(newUser);
    return true;
  }

  return (
    <div className="main">
      <Header />
      <div className="container">
        <form
          className="form-box"
          onSubmit={async (event) => {
            const handeled = await handleSubmit(event);
            if (handeled === true) navigate('/homepage/1');
          }}
        >
          <div className="header">Sign up</div>
          <div className="input-container">
            FIRST NAME:
            <input
              type="text"
              name="FirstName"
              value={firstName}
              onChange={handleFirstName}
            />
          </div>
          LAST NAME:
          <div className="input-container">
            <input
              type="text"
              name="LastName"
              value={lastName}
              onChange={handleLastName}
            />
          </div>
          <span>EMAIL ADDRESS:</span>
          <div className="input-container">
            <input
              type="text"
              name="Email"
              value={email}
              onChange={handleEmail}
            />
          </div>
          CHOOSE PASSWORD:
          <div className="input-container">
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
            onChange={handleSubmit}
          >
            Create account
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUP;
