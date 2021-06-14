import styles from "./Newpokemon.module.css";
import { connect } from "react-redux";
import { useState } from "react";

const types = ["Normal", "Fighting", "Flying", "Poison", "Ground", "Rock", "Bug", "Ghost", "Steel", "Fire", "Grass",
    "Water", "Electric", "Psychic", "Ice", "Dragon", "Dark", "Fairy"];

function NewPokemon(props) {
    let initialState = {
        name: "",
        hp: 0,
        attack: 0,
        defense: 0,
        speed: 0,
        weight: 0,
        height: 0,
        type: [],
        image: "https://professorlotus.com/Sprites/Unown_N.gif"
    }

    const initialState_active = {
        Normal: "off",
        Fighting: "off",
        Flying: "off",
        Poison: "off",
        Ground: "off",
        Rock: "off",
        Bug: "off",
        Ghost: "off",
        Steel: "off",
        Fire: "off",
        Grass: "off",
        Water: "off",
        Electric: "off",
        Psychic: "off",
        Ice: "off",
        Dragon: "off",
        Dark: "off",
        Fairy: "off"
    }
    const [toAdd, settoAdd] = useState([])

    const [data, setData] = useState(initialState);
    const [active, setActive] = useState(initialState_active);
    const eventHandler = (e) => {
        setData({ ...data, [e.target.id]: e.target.value })
    }


    const createPokemon = (e) => {
        e.preventDefault()
        setData(initialState)
        setActive(initialState_active)
        if(data.name.length === 0) alert("Por favor ingrese un nombre a su Pokemon!")
        else{
            fetch(`http://localhost:3001/pokemons`, {
                method: 'POST',
                body: JSON.stringify({ ...data, type: toAdd }), // data can be `string` or {object}!
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            alert("Pokemon creado con exito!")
        }
    }

    const typeHandler = async (e) => {
        console.log("CLICK")
        e.preventDefault()
        let already = toAdd.indexOf(+ e.target.id);
        const property = e.target.getAttribute('property')
        if (already !== -1) {
            console.log("OFF")
            setActive({ ...active, [property]: "off" })
            toAdd.splice(already, 1)
            settoAdd(toAdd)
        } else {
            console.log("ON")
            setActive({ ...active, [property]: "on" })
            settoAdd([...toAdd, + e.target.id])
        }
    }



    return (
        <div className={styles.container}>
            <div className={styles.NewPokemon}>
                <form onSubmit={createPokemon}>
                        <input  className={styles.bar} id="name" onChange={eventHandler} placeholder="Your pokename!" value={data.name}></input>
                    <div className={styles.stats}>
                        <div className={styles.box}>
                            <div className={styles.input}>
                                    <input  id="hp" type="range" min="0" max="300" onChange={eventHandler}></input>
                                <p className={styles.name} id={styles.statHeader}>Hp: {data.hp} {"=>"}
                                    <meter min="0" max="300" low="100" value={data.hp} /></p>
                            </div>
                        </div>
                        <div className={styles.box}>
                            <div className={styles.input}>
                                <input  id="attack" type="range" min="0" max="200" onChange={eventHandler}></input>
                                <p className={styles.name} id={styles.statHeader}>Attack: {data.attack} {"=>"}
                                    <meter min="0" max="200" low="100" value={data.attack} /></p>
                            </div>
                        </div>
                        <div className={styles.box}>
                            <div className={styles.input}>
                                <input  id="defense" type="range" min="0" max="400" onChange={eventHandler} placeholder="hp"></input>
                                <p className={styles.name} id={styles.statHeader}>Defense: {data.defense} {"=>"}
                                    <meter min="0" max="400" low="150" value={data.defense} /></p>
                            </div>
                        </div>
                        <div className={styles.box}>
                            <div className={styles.input}>
                                <input  id="speed" type="range" min="0" max="200" onChange={eventHandler} placeholder="hp"></input>
                                <p className={styles.name} id={styles.statHeader}>Speed: {data.speed} {"=>"}
                                    <meter min="0" max="200" low="80" value={data.speed} /></p>
                            </div>
                        </div>
                        <div className={styles.box}>
                            <div className={styles.input}>
                                <input  id="weight" type="range" min="0" max="800" onChange={eventHandler} placeholder="hp"></input>
                                <p className={styles.name} id={styles.statHeader}>Weight: {data.weight} {"=>"}
                                    <meter min="0" max="800" low="40" value={data.weight} /></p>
                            </div>
                        </div>
                        <div className={styles.box}>
                            <div className={styles.input}>
                                <input  id="height" type="range" min="0" max="100" onChange={eventHandler} placeholder="hp"></input>
                                <p className={styles.name} id={styles.statHeader}>Height: {data.height} {"=>"}
                                    <meter min="0" max="100" low="50" value={data.height} /></p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.tyButtons}>
                        {types.map(type => {
                            let ind = types.indexOf(type) + 1
                            return (<div key={type}>
                                <button id={ind} className={styles[active[type]] + " " + styles.bgbutton} property={type} onClick={typeHandler}>{type}</button>
                            </div>)
                        })}
                    </div>
                    <input className={styles.bgbutton} id={styles.submit} type="submit" value="CREATE" />
                </form>
            </div>
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
        // getPokemons: (page, type) => dispatch(getPokemons(page, type)),
        // resetFilter: () => dispatch(resetFilter()),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)(NewPokemon);