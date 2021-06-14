import styles from "./Home.module.css";
import Pokemons from "../Pokemons/Pokemons";
import Filter from "../Filter/Filter";
import Order from "../Order/Order";
import { connect } from "react-redux";
import { getPokemons, resetFilter } from "../../actions";
import { useEffect, useState } from "react";


function Home(props) {
    const [isLoading, setisLoading] = useState(true);
    const [currentPage, setcurrentPage] = useState(0)
    useEffect(() => {
        new Promise(async (resolve, reject) => {
            await props.resetFilter()
            resolve()
        })
            .then(() => props.getPokemons(-1, ""))
            .then(() => props.getPokemons(1, ""))
            .then(() => props.getPokemons(2, ""))
            .then(() => props.getPokemons(3, ""))
            .then(() => setisLoading(false))
            .then(() => props.getPokemons(4, ""))
    }, [])



    return (
        <div className={styles.Home}>
            <div className={styles.filor}>
                <Filter setisLoading={setisLoading} setcurrentPage={setcurrentPage}></Filter>
                <Order setcurrentPage={setcurrentPage}></Order>
            </div>
            <Pokemons isLoading={isLoading} setcurrentPage={setcurrentPage} currentPage={currentPage}></Pokemons>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        pokemons: state.pokemons
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getPokemons: (page, type) => dispatch(getPokemons(page, type)),
        resetFilter: () => dispatch(resetFilter()),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)(Home);