import { Navigate, Route, Routes } from "react-router-dom";
import Info from "../../additional/Info/Info";
import BaselinkerStatistic from "../../pages/BaselinkerStatistic/BaselinkerStatistic";
import Editing from "../../pages/Editing/Editing";
import Login from "../../pages/Login";
import News from "../../pages/News";
import RaportsEditing from "../../pages/RaportEditing/RaportsEditing";
import Scanner from "../../pages/Scanner/Scanner";
import styles from './main.module.scss';

const Main = () => {
    return (
        <main className={styles.main}>
            <Routes>
              <Route path="/" element={<Navigate  to="/news"/>} />
              <Route path="/news" element={<News />} />
              <Route path="/login" element={<Login />} />
              <Route path="/editing" element={<Editing />} >
                  <Route path="/editing/raports" element={<RaportsEditing />}/>
                  <Route path="/editing/bstatistic" element={<BaselinkerStatistic />}/>
                  <Route path="/editing/scanner" element={<Scanner />}/>
                  <Route path="/editing/*" element={<span>No way!</span>}/>
              </Route>
          </Routes>
          <Info />
        </main>
    );
}

export default Main;