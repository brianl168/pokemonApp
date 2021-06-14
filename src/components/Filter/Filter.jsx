import styles from "./Filter.module.css";
import { applyFilter, resetFilter, getPokemons, filterDB, filterAPI } from "../../actions";
import { connect } from "react-redux";
import { useState } from 'react';

const types = ["Normal", "Fighting", "Flying", "Poison", "Ground", "Rock", "Bug", "Ghost", "Steel", "Fire", "Water",
    "Grass", "Electric", "Psychic", "Ice", "Dragon", "Dark", "Fairy"];

function Filter(props) {
    const setisLoading = props.setisLoading

    const setcurrentPage = props.setcurrentPage;

    const [lighSearch, setLightSearch] = useState(true)

    let FilterDB = false;

    let FilterAPI = false;

    let lightSearchSign;

    if (lighSearch) lightSearchSign = "ON"
    else lightSearchSign = "OFF"

    const filterHandler = (type) => {
        setisLoading(true)
        new Promise(async (resolve, reject) => {
            await props.applyFilter(type, FilterDB, FilterAPI, lighSearch)
            resolve()
        })
            .then(() => setisLoading(false))
    }

    const resetFilter = () => {
        setisLoading(true)
        setcurrentPage(0)
        FilterDB = false;

        FilterAPI = false;
        new Promise(async (resolve, reject) => {
            await props.resetFilter()
            resolve()
        })
            .then(() => props.getPokemons(-1, ""))
            .then(() => props.getPokemons(1, ""))
            .then(() => props.getPokemons(2, ""))
            .then(() => setisLoading(false))
            .then(() => props.getPokemons(3, ""))
            .then(() => props.getPokemons(4, ""))
    }

    const DBpokemons = () => {
        setisLoading(true)
        setcurrentPage(0)
        FilterDB = true;
        FilterAPI = false;
        new Promise(async (resolve, reject) => {
            await props.filterDB()
            resolve()
        })
            .then(() => setisLoading(false))
    }

    const changeSearch = () => {
        setLightSearch(!lighSearch)
    }

    const APIpokemons = () => {
        setisLoading(true)
        setcurrentPage(0)
        FilterAPI = true;
        FilterDB = false;
        new Promise(async (resolve, reject) => {
            await props.filterAPI()
            resolve()
        })
            .then(() => setisLoading(false))
    }
    return (
        <div className={styles.filters}>
            <div className={styles.typeBUTTON}>
                {types.map(type => {
                    return (
                        <button key={type} className={styles.buttons} id={styles.tybutton} onClick={() => filterHandler(type)}><p id={styles.tybutton} className={styles.sign}>{type}</p></button>
                    )
                })}
            </div>
            <button className={styles.buttons} id={styles.bgbutton} onClick={resetFilter}><p className={styles.sign}> RESET<br/> FILTERS </p> </button>
            <button className={styles.buttons} id={styles.bgbutton} onClick={DBpokemons}><p className={styles.sign}>JUST <br/>BY <br/>USERS</p></button>
            <button className={styles.buttons} id={styles.bgbutton} onClick={APIpokemons}><p className={styles.sign}>JUST <br/>OR.POKEMONS</p></button>
            <button className={styles.buttons} id={styles.bgbutton} onClick={changeSearch}><p className={styles.sign}> LIGHTSEARCH <br/> {lightSearchSign} </p></button>
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
        applyFilter: (type, FilterDB, FilterAPI, lighSearch) => dispatch(applyFilter(type, FilterDB, FilterAPI, lighSearch)),
        resetFilter: () => dispatch(resetFilter()),
        getPokemons: (page, type) => dispatch(getPokemons(page, type)),
        filterDB: () => dispatch(filterDB()),
        filterAPI: () => dispatch(filterAPI()),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)(Filter);
