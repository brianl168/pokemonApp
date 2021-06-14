import styles from "./Pagination.module.css";



function Pagination(props){
    let changePage = props.changePage;
    let currentPage = props.currentPage
    const pokemons = props.pokemons

    const nextHandler = () =>{
        if(pokemons.slice(currentPage + 12, currentPage + 24).length > 0) changePage(currentPage + 12)
    }

    const previousHandler = () =>{
        if(currentPage !== 0)changePage(currentPage - 12)
    }
    return (
        <div className={styles.Pagination}>
            <button className={styles.button} onClick={previousHandler}>←</button>
            <button className={styles.button} onClick={nextHandler}>→</button>
        </div>
    )
}

export default Pagination;