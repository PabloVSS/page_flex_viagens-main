/** @format */
import styles from "../../styles/components/Navbar.module.css";

import React,  { useState } from "react";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";


export const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.header_container}>
      <div className={styles.logo_header}>
        <h1>Flex Viagens</h1>
      </div>
      <ul className={styles.navbar}>
        <li className={styles.button}>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </li>
        <li className={styles.button}>
          <Link href='/sobre'>
            <a>Sobre</a>
          </Link>
        </li>
        <li className={styles.button}>
          <Link href='/servicos'>
            <a>Serviços</a>
          </Link>
        </li>
        <li className={styles.button}>
          <Link href='/planos'>
            <a>Planos</a>
          </Link>
        </li>
        <li className={styles.button}>
          <Link href='/contatos'>
            <a>Contatos</a>
          </Link>
        </li>
      </ul>
      <button className={styles.mobile_menu_icone}>
        {isMobile ? <i> </i> : <FiMenu /> }
      </button>
    </nav>
  );
};
