/** @format */

import React from "react";
import styles from "../../styles/components/CardPlans.module.css";

export default function Cardplans(props) {
  return (
    <div className={styles.plans_container}>
      <div className={styles.title_container}>
        <h5>{props.titulo}</h5>
      </div>
      <div className={styles.conteudo_container}>
        <div className={styles.services}>
          <p>Suporte 24h</p>
          {props.suporte}
        </div>
        <div className={styles.services}>
          <p>Serviços de Quarto</p>
          {props.quarto}
        </div>
        <div className={styles.services}>
          <p>Guia Turístico</p>
          {props.guia}
        </div>
        <div className={styles.services}>
          <p>Roteiro de Trilhas</p>
          {props.roteiro}
        </div>
        <div className={styles.services}>
          <p>Serviço Personalizado</p>
          {props.personalizado}
        </div>
        <div className={styles.services}>
          <p>Área Vip</p>
          {props.vip}
        </div>
      </div>
      <div className={styles.plans_footer}>
        <button>
          <a href={props.link}>Saiba Mais</a>
        </button>
      </div>
    </div>
  );
}
