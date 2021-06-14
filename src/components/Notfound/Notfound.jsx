import styles from "./Notfound.module.css";

function Notfound(props) {
        return (
            <div className={styles.container}>
            <p className={styles.not}>I´m sorry, i can´t find a pokemon with that name ;  (</p>
        </div>
        )
    }

export default Notfound;