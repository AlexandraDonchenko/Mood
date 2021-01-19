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
            <div className="request">FIRST NAME: </div>
            <input
              type="text"
              name="FirstName"
              value={firstName}
              onChange={handleFirstName}
            />
          </div>
          <div className="input-container">
            <div className="request">LAST NAME:</div>
            <input
              type="text"
              name="LastName"
              value={lastName}
              onChange={handleLastName}
            />
          </div>
          <div className="input-container">
            <div className="request">EMAIL ADDRESS:</div>
            <input
              type="text"
              name="Email"
              value={email}
              onChange={handleEmail}
            />
          </div>
          <div className="input-container">
            <div className="request">CHOOSE PASSWORD:</div>
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
