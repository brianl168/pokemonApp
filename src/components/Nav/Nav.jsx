import styles from "./Nav.module.css";
import { Link } from 'react-router-dom';
import Search from "../Search/Search";

function Nav(props) {
    return (
        <div className={styles.Nav}>
            <ul className={styles.links}>
                <li>
                    <button className={styles.button}>
                    <Link to="/home"><p className={styles.sign}>HOME</p></Link>
                    </button>
                </li>
                <li>
                <button className={styles.button}>
                    <Link to="/new"><p className={styles.sign}>CREATE A POKEMON </p></Link>
                    </button>
                </li>
                <li>
                <button className={styles.button}>
                    <Link to="/"><p className={styles.sign}>ABOUT </p></Link>
                    </button>
                </li>
            </ul>
            <div className={styles.search}>
                <Search></Search>
            </div>
        </div>
    )
}

export default Nav;