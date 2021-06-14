import styles from "./Details.module.css";
import { useState } from 'react';
import { useEffect } from "react";

function Details(props) {
    const id = props.match.params.id;
    const dataInitial = { value: false };
    const [data, setData] = useState(dataInitial);

    function MaysPrimera(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    useEffect(() => {
        fetch(`http://localhost:3001/pokemons/${id}`)
            .then(response => response.json())
            .then(json => setData({ value: json }))
    }, [id])
    if(data.value !== false){
        return (
            <div className={styles.container}>
                <div className={styles.Details}>
                    <ul className={styles.ul}>
                        <li className={styles.name}>
                            {data.value.name} <br />#{data.value.id}
                        </li>
                        <li>
                            <img alt="Pokemon" className={styles.img} src={data.value.image} />
                        </li>
                        <li>
                            <ul id={styles.typeHeader}>Types: <br />
                                <div className={styles.typeElements}>
                                    {data.value && data.value.type.map(type => {
                                        type = MaysPrimera(type.toLowerCase())
                                        return <li className={styles.ulTypes}>{type} </li>
                                    })
                                    }
                                </div>
                            </ul>
                        </li>
                        <div className={styles.stats}>
                            <li>
                                <p className={styles.name} id={styles.statHeader}>Hp: {data.value.stats.hp} {"=>"}
                                    <meter min="0" max="300" low="100" value={data.value.stats.hp} /></p>
                            </li>
                            <li>
                                <p className={styles.name} id={styles.statHeader}>
                                    Defense: {data.value.stats.defense} {"=>"}
                                    <meter min="0" max="400" low="150" value={data.value.stats.defense} />
                                </p>
                            </li>
                            <li>
                                <p className={styles.name} id={styles.statHeader}>
                                    Attack: {data.value.stats.attack} {"=>"}
                                    <meter min="0" max="200" low="100" value={data.value.stats.attack} />
                                </p>
                            </li>
                            <li>
                                <p className={styles.name} id={styles.statHeader}>
                                    Speed: {data.value.stats.speed} {"=>"}
                                    <meter min="0" max="200" low="80" value={data.value.stats.speed} />
                                </p>
                            </li>
                            <li>
                                <p className={styles.name} id={styles.statHeader}>
                                    Weight: {data.value.weight} {"=>"}
                                    <meter min="0" max="800" low="40" value={data.value.weight} />
                                </p>
                            </li>
                            <li>
                                <p className={styles.name} id={styles.statHeader}>
                                    Height: {data.value.height} {"=>"}
                                    <meter min="0" max="100" low="50" value={data.value.height} />
                                </p>
                            </li>
                        </div>
                        <div className={styles.div}></div>
                    </ul>
                </div>
            </div>
        )
    }
    else return <div></div>
}
export default Details;