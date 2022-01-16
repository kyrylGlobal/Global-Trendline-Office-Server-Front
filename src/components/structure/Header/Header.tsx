import { FC } from "react";
import { NavLink } from "react-router-dom";
import styles from './header.module.scss';

const Header:FC = () => {
    return (
        <header className={styles.header}>
            <nav>
                <ul>
                    <li className={styles.logoLi}>
                        <NavLink to='/news' className={`${styles.navLink}`}><span>Global Trendline</span></NavLink>
                    </li>
                    <li className={styles.secondariesLi}>
                        <NavLink to={'/editing'} className={(navData) =>  `${navData.isActive ? styles.activeNavLink : styles.navLink}`}><span>Editing</span></NavLink>
                    </li>
                    <li className={styles.secondariesLi}>
                        <NavLink to={'/Login'} className={(navData) =>  `${navData.isActive ? styles.activeNavLink : styles.navLink}`}><span>Sign In</span></NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;