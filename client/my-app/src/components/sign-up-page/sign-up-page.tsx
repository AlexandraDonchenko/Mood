import { ChangeEvent, useState } from 'react';
import { navigate } from '@reach/router';

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
    <div>
      <form
        onSubmit={async (event) => {
          const handeled = await handleSubmit(event);
          if (handeled === true) navigate('/homepage/1');
        }}
      >
        <label>
          FIRST NAME:
          <input
            type="text"
            name="FirstName"
            value={firstName}
            onChange={handleFirstName}
          />
        </label>
        <label>
          LAST NAME:
          <input
            type="text"
            name="LastName"
            value={lastName}
            onChange={handleLastName}
          />
        </label>
        <label>
          EMAIL ADDRESS:
          <input
            type="text"
            name="Email"
            value={email}
            onChange={handleEmail}
          />
        </label>
        <label>
          CHOOSE PASSWORD:
          <input
            type="text"
            name="Password"
            value={password}
            onChange={handlePassword}
          />
        </label>
        <button type="submit" value="Submit" onChange={handleSubmit}>
          Create account
        </button>
      </form>
    </div>
  );
}

export default SignUP;
