/** @format */

import React, { Component } from "react";
import styles from "../../styles/components/Servico.module.css";
import Card from "../Card";

export default class Servico extends Component {
  render() {
    return (
      <div className={styles.container_service}>
        <h3>Serviços</h3>
        <div className={styles.container_itens}>
          <Card
            caminho='../images/icon-2.png'
            descricao='hospedagens'
            nome='Hospedagens'
            link='/oi'
            chamar='Comprar Agora'
          />
          <Card
            caminho='../images/icon-1.png'
            descricao='pacote de viagens'
            nome='Pacotes de viagens'
            link='#'
            chamar='Comprar Agora'
          />
          <Card
            caminho='../images/icon-3.png'
            descricao='roteiros personalizados'
            nome='Roteiros personalizados'
            link='#'
            chamar='Comprar Agora'
          />
        </div>
      </div>
    );
  }
}
