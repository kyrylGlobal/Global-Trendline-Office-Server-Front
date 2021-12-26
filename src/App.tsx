import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { FC } from "react";
import News from "./components/Pages/News/News";
import AppStyledComponent from "./components/styles/Custom/AppStyledComponent.styled";

const App:FC = () => {
  return (
    <AppStyledComponent headerHeight="15vh" mainHeight="minmax(85vh, auto)" footerHeight="10vh">
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Navigate  to="/News"/>} />
            <Route path="/News" element={<News />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </AppStyledComponent>
  );
}

export default App;
