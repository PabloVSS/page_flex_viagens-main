/** @format */

import Head from "next/head";
import styles from "../../styles/components/Layout.module.css";
import Footer from "./Footer";
import { Navbar } from "./Navbar";

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Flex Viagens</title>
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
