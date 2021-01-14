import { ChangeEvent, useState } from 'react';
import { navigate } from '@reach/router';

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
    <form>
      <label>
        EMAIL ADDRESS:
        <input type="text" name="Email" value={email} onChange={handleEmail} />
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
        Login
      </button>
    </form>
  );
}

export default LogIn;
