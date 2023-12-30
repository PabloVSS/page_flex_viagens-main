/** @format */

import React, { Component } from "react";
import styles from "../../styles/components/Planos.module.css";
import Cardplans from "../Cardplans";
import { SiVerizon } from "react-icons/si";

export default class Planos extends Component {
  render() {
    return (
      <div className={styles.container}>
        <h4>Planos</h4>
        <div className={styles.plans_container}>
          <Cardplans
            titulo='Plano 1'
            quarto={<SiVerizon />}
            guia={<SiVerizon />}
            link='/'
          />
          <Cardplans
            titulo='Plano 2'
            suporte={<SiVerizon />}
            quarto={<SiVerizon />}
            guia={<SiVerizon />}
            link=''
          />
          <Cardplans
            titulo='Plano 3'
            suporte={<SiVerizon />}
            quarto={<SiVerizon />}
            guia={<SiVerizon />}
            roteiro={<SiVerizon />}
            personlizado={<SiVerizon />}
            link='/'
          />
          <Cardplans
            titulo='Plano 4'
            suporte={<SiVerizon />}
            quarto={<SiVerizon />}
            guia={<SiVerizon />}
            roteiro={<SiVerizon />}
            personlizado={<SiVerizon />}
            vip={<SiVerizon />}
            link='/'
          />
        </div>
      </div>
    );
  }
}
