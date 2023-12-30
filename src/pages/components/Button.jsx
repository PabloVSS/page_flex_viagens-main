/** @format */

import styles from "../../styles/components/Button.module.css";

function Button(props) {
  return (
    <button className={styles.button}>
      <a url={props.link}> {props.name}</a>
    </button>
  );
}

export default Button;
