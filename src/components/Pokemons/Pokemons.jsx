import styles from "./Pokemons.module.css";
import Pokemon from "../Pokemon/Pokemon";
import { connect } from "react-redux";
import Pagination from "../Pagination/Pagination";


function Pokemons(props) {
    let pokemons = props.pokemons;
    let isLoading = props.isLoading

    const currentPage = props.currentPage;
    const setcurrentPage = props.setcurrentPage;

    const filteredPokemons = () => {
        return pokemons.slice(currentPage, currentPage + 12)
    }


    if (isLoading) {
        return (
            <div>
                <img className={styles.loading}src="https://i.gifer.com/JO4d.gif" alt="Loading"/>
            </div>
        )
    }

    if (pokemons.length === 0) return <h2 className={styles.notfound}>No se encontraron pokemons!</h2>

    else {
        return (
            <div className={styles.bgconteiner}>
                <div className={styles.conteiner}>
                    <div className={styles.Pokemons}>
                        {
                            filteredPokemons().map(pokemon => {
                                return <Pokemon name={pokemon.name} key={pokemon.id} image={pokemon.image} types={pokemon.type} id={pokemon.id}></Pokemon>
                            })
                        }
                    </div>
                    <div className={styles.pag}>
                        <Pagination changePage={setcurrentPage} currentPage={currentPage} pokemons={pokemons} />
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        pokemons: state.pokemons
    };
}

function mapDispatchToProps(dispatch) {
    return {
        // getPokemons: page => dispatch(getPokemons(page))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)(Pokemons);