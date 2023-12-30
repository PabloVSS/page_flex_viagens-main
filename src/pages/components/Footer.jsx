/** @format */

import styles from "../../styles/components/Footer.module.css";

import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer className={styles.footer}>
        <p>&copy; 2022 CSS Flexbox</p>
        <p>Desenvolvido por: Pablo Vinícius</p>
      </footer>
    );
  }
}
