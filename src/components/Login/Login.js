import React from "react";
import styles from "./Login.module.css";

function Login(props) {
  return (
    <div className={styles.login}>
      <button onClick={props.login} className={styles.button}>
        Login to Spotify
      </button>
    </div>
  );
}

export default Login;
