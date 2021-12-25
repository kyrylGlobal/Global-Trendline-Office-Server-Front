import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FC } from "react";
import News from "./components/Pages/News/News";

const App:FC = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main className="main">
        <Routes>
            <Route path="/" element={<News />} />
            <Route path="/News" element={<News />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
