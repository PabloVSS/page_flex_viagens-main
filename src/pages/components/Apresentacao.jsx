/** @format */

import styles from "../../styles/components/Apresentacao.module.css";

import React, { Component } from "react";
import Button from "./button";
import Image from "next/image";

export default class Apresentacao extends Component {
  render() {
    return (
      <div className={styles.container_apresentacao}>
        <div className={styles.texto_apresentacao}>
          <h1>FlexTurismo</h1>
          <p>O melhor serviços para você</p>
          <Button link='/servicos' name='Saiba mais!'></Button>
        </div>
        <div>
          <Image
            src='/main.png'
            alt='balcão de atendimento'
            width={800}
            height={600}
          />
        </div>
      </div>
    );
  }
}
