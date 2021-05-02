import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import fstyles from "../styles/Footer.module.css";
import mstyles from "../styles/Menu.module.css";
import { Container, Col, Row } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>BlackboxAlgos</title>
        <meta name="description" content="Autotrading" />
        <link rel="icon" href="/block.svg" />
      </Head>

      <Navbar bg="dark" expand="lg" className={mstyles.navbar}>
        <Navbar.Brand href="#home" className={mstyles.navbarBrand}>
          <img
            alt=""
            src="/test.png"
            width="70"
            height="70"
            className="d-inline-block align-top"
          />
          <span className="brand">BlackBoxAlgos</span>
        </Navbar.Brand>
      </Navbar>
      <div className="section1"></div>

      <div className={styles.section2}>
        <div className={styles.sologanWrapper}>
          <div className={styles.sologan}>
            Your machine, your account, your funds, our algos
          </div>
        </div>
      </div>

      <div className={styles.section3} id="product">
        <Container>
          <Row className="mb-5">
            <Col className={styles.desc}>
              <div>
                <h1
                  style={{
                    fontWeight: 500,
                    fontSize: "2rem",
                  }}
                >
                  Our Strategies
                </h1>
                <div className={styles.separator}></div>
              </div>
            </Col>
          </Row>
          <Row>
            <Item imgSrc="/brain.png" title="Machine Learning" />
            <Item imgSrc="/fluctuation.png" title="High-Frequency Trading" />
            <Item imgSrc="/network.png" title="Statistical Arbitrage" />
            <Item imgSrc="/stock-market.png" title="Market Making" />
          </Row>
        </Container>
      </div>

      <div className={styles.comming}>
        <p>Strategy Coins Coming Soon</p>
      </div>
      <footer className={fstyles.footer}>
        <div className={fstyles.wrapper}>
          <span>FIND US AT &nbsp;</span>
          <a href="mailto:BLACKBOXALGOS@PROTONMAIL.COM">
            blackboxalgos@protonmail.com
          </a>
        </div>
      </footer>
    </div>
  );
}

const Item = ({ imgSrc, title }) => {
  return (
    <Col lg={3} md={3} xs={6}>
      <Image src={imgSrc} width={50} height={50} />
      <div>{title}</div>
    </Col>
  );
};
