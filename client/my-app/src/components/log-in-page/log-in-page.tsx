import { useState } from 'react';
import { navigate } from '@reach/router';
import Header from '../header/header';
import styles from './Log-in-page.module.css';

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
    <div className={styles.main}>
      <Header />
      <div className={styles.container}>
        <div className={styles.form}>
          <div className={styles.header}>LogIn</div>
          <form className={styles.formcontainer}
            onSubmit={async (event) => {
              const handeled = await handleSubmit(event);
              if (handeled === true) navigate('/homepage/1');
            }}
          >
            <div className={styles.inputcontainer}>
              <div className={styles.request}>ENTER EMAIL ADDRESS:</div>

              <input
                type="text"
                name="Email"
                value={email}
                onChange={handleEmail}
              />
            </div>
            <div className={styles.inputcontainer}>
              <div className={styles.request}>ENTER PASSWORD:</div>
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
