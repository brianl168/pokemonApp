import styles from "./Welcome.module.css";
import { useHistory } from 'react-router-dom'

function Welcome(props) {
    const history = useHistory();
    return (
        <div className={styles.Welcome}>
            <div className={styles.data}>
            <img className={styles.img} alt="Welcome" src="https://www.r4ndom.uk/uploads/monthly_2019_05/pikachu-hello.gif.02b2d53abc5fb28853f60f9c879e5984.gif" />
                <h3 className={styles.text}>This is a React pokemon app created by A. Brian Lopez for <br/>the Henry Individual Proyect (PI),
                    for this app i use technologies like Redux, Express, Sequelize, Postgres, NodeJS, among others.<br/>
                    I hope you enjoy and let´s get started! 
                </h3>
                <button onClick={() => history.push(`/home`)} className={styles.button}>
                    <p className={styles.sign}>HOME</p>
                </button>
            </div>
        </div>
    )
}

export default Welcome;