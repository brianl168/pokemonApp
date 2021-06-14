import styles from "./Pokemon.module.css";
import { Link } from 'react-router-dom';



function Pokemon({ name, image, types, id}){
    function MaysPrimera(string){
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    name = MaysPrimera(name.toLowerCase())
    return (
        <Link to={`/pokemonDetails/${id}`} className={styles.name}>
        <div className={styles.Pokemon}>
            <ul className={styles.ul}>
                <li className={styles.header}>{name} <br/>#{id}</li>
                <li>
                    <ul className={styles.ul} id={styles.type}>
                    {types.map(type => {
                        type = MaysPrimera(type.toLowerCase())
                        return <li key={type} className={styles.li}><h6 className={styles.type}>{type}</h6></li>
                    })
                    }
                    </ul>
                </li>
            </ul>
            <img src={image} alt="Pokemon" className={styles.sprite}/>
        </div>
        </Link>
    )
}

export default Pokemon;