import styles from "./Order.module.css";
import { connect } from "react-redux";
import { orderPokeALPHascen, orderPokeALPHdescen, orderPokeATTACKascen, orderPokeATTACKdescen, orderDefault} from "../../actions/index"


function Order(props){
    const orderPokeALPHascen = props.orderPokeALPHascen
    const orderPokeALPHdescen = props.orderPokeALPHdescen
    const orderPokeATTACKascen = props.orderPokeATTACKascen
    const orderPokeATTACKdescen = props.orderPokeATTACKdescen
    const orderDefault = props.orderDefault
    const setcurrentPage= props.setcurrentPage

    const firstOrder = async () => {
        await orderPokeALPHascen()
        setcurrentPage(1)
        setcurrentPage(0)
    }

    const secondOrder = async () => {
        await orderPokeALPHdescen()
        setcurrentPage(1)
        setcurrentPage(0)
    }

    const thirdOrder = async () => {
        await orderPokeATTACKascen()
        setcurrentPage(1)
        setcurrentPage(0)
    }

    const fourthOrder = async () => {
        await orderPokeATTACKdescen()
        setcurrentPage(1)
        setcurrentPage(0)
    }

    const defaultOrder= async () => {
        await orderDefault()
        setcurrentPage(1)
        setcurrentPage(0)
    }
    return (
        <div>
            <button className={styles.buttons} onClick={firstOrder}><div className={styles.sign}>ALPH. ↑</div></button>
            <button className={styles.buttons} onClick={secondOrder}><div className={styles.sign}>ALPH. ↓</div></button>
            <button className={styles.buttons} onClick={thirdOrder}><div className={styles.sign}>ATTACK ↑</div></button>
            <button className={styles.buttons} onClick={fourthOrder}><div className={styles.sign}>ATTACK ↓</div></button>
            <button className={styles.buttons} onClick={defaultOrder}><div className={styles.sign}>RESET ORDER</div></button>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        // pokemons: state.pokemons
    };
}

function mapDispatchToProps(dispatch) {
    return {
        orderPokeALPHascen: () => dispatch(orderPokeALPHascen()),
        orderPokeALPHdescen: () => dispatch(orderPokeALPHdescen()),
        orderPokeATTACKascen: () => dispatch(orderPokeATTACKascen()),
        orderPokeATTACKdescen: () => dispatch(orderPokeATTACKdescen()),
        orderDefault: () => dispatch(orderDefault())
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)(Order);