import { BrowserRouter } from "react-router-dom";
import { FC } from "react";
import Header from "./structure/Header";
import Main from "./structure/Main";
import Footer from "./structure/Footer";
import AppStyledComponent from "./styles/Reusable/AppStyledComponent.styled";

const App:FC = () => {
  return (
    <AppStyledComponent headerHeight="8vh" mainHeight="minmax(92vh, auto)" footerHeight="8vh">
      <BrowserRouter>
        <Header />
        <Main />
        <Footer />
      </BrowserRouter>
    </AppStyledComponent>
  );
}

export default App;
