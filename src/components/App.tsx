import { BrowserRouter } from "react-router-dom";
import { FC } from "react";
import Header from "./structure/Header/Header";
import Main from "./structure/Main/Main";
import Footer from "./structure/Footer/Footer";
import styles from './app.module.scss';

const App:FC = () => {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Header />
        <Main />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
