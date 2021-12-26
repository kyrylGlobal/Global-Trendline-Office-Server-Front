import { Navigate, Route, Routes } from "react-router-dom";
import News from "../pages/News/News";
import MainStyledComponent from "../styles/Reusable/MainStyledComponent.styled";

const Main = () => {
    return (
        <MainStyledComponent padding="50px">
          <Routes>
              <Route path="/" element={<Navigate  to="/News"/>} />
              <Route path="/News" element={<News />} />
          </Routes>
        </MainStyledComponent>
    );
}

export default Main;