import { ChangeEvent, useState } from 'react';
import { navigate } from '@reach/router';
import Header from '../header/header';
import styles from './Sign-up-page.module.css'
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
    return  true;
  }

  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.container}>
        <form
          className={styles.form}
          onSubmit={async (event) => {
            const handeled = await handleSubmit(event);
            if (handeled === true) navigate('/homepage/1');
          }}
        >
          <div className={styles.header}>Sign up</div>
          <div className={styles.inputcontainer}>
            <div className={styles.request}>FIRST NAME: </div>
            <input
              type="text"
              name="FirstName"
              value={firstName}
              onChange={handleFirstName}
            />
          </div>
          <div className={styles.inputcontainer}>
            <div className={styles.request}>LAST NAME:</div>
            <input
              type="text"
              name="LastName"
              value={lastName}
              onChange={handleLastName}
            />
          </div>
          <div className={styles.inputcontainer}>
            <div className={styles.request}>EMAIL ADDRESS:</div>
            <input
              type="text"
              name="Email"
              value={email}
              onChange={handleEmail}
            />
          </div>
          <div className={styles.inputcontainer}>
            <div className={styles.request}>CHOOSE PASSWORD:</div>
            <input
              type="password"
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
