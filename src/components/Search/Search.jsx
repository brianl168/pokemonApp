import styles from "./Search.module.css";
import { useState } from 'react';
import { useHistory } from 'react-router-dom'

function Search(props){
    const [state, setState] = useState("");

    const history = useHistory();

    const changeHandler = (e)=> {
        setState(e.target.value);
    }

    const searchHandler = (e) => {
        e.preventDefault();
        let id;
        fetch(`http://localhost:3001/pokemons?name=${state}`)
        .then(response => response.json())
        .then(json => {
            id = json.id
            if(json.error === "Not found") id = "Not_found"
            history.push(`/pokemonDetails/${id}`)
        })
    }

    const enter = (e) => {
        if(e.key === "Enter") searchHandler(e)
    }

    return (
        <div className={styles.Search}>
            <input placeholder="Nombre de pokemon" value={state} onChange={changeHandler} onKeyDown={enter}></input>
            <button onClick={searchHandler} className={styles.button}><p className={styles.sign}>SEARCH</p></button>
        </div>
    )
}

export default Search