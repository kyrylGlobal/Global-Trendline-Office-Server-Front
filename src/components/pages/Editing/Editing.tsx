import { FC } from "react";
import { NavLink, Outlet } from "react-router-dom";
import styles from './editing.module.scss';

const Editing: FC = () => {
    return(
        <section>
            <nav className={styles.editingNav}>
                <ul>
                    <li>
                        <NavLink to="/editing/raports" className={(navData) => navData.isActive ? styles.activeEditingNavLink : styles.editingNavLink}>
                            <span>Sales Comarch Raport</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/editing/bstatistic" className={(navData) => navData.isActive ? styles.activeEditingNavLink : styles.editingNavLink}>
                                <span>Baselinker statistic</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/editing/scanner" className={(navData) => navData.isActive ? styles.activeEditingNavLink : styles.editingNavLink}>
                                <span>Scanner</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/editing/another" className={(navData) => navData.isActive ? styles.activeEditingNavLink : styles.editingNavLink}>
                                <span>Another...(in development)</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </section>
    );
}

export default Editing;