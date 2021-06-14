
export function getPokemons(page, type) {
    let typeURL = `&type=${type}`;
    if(type === "") typeURL = "";
    return function(dispatch) {
        return fetch(`http://localhost:3001/pokemons?page=${page}${typeURL}`)
            .then(response => response.json())
            .then(json => {
                dispatch({ type: "GET_POKEMONS", payload: json });
        });
    };
}

export function applyFilter(type,FilterDB,FilterAPI, deepSearch) {
    type = type[0].toLowerCase() + type.slice(1);
    if(deepSearch){
        return function(dispatch) {
            return dispatch({ type: "APPLY_FILTER", deepSearch: deepSearch, typePO: type})
        }
    }
    return function(dispatch) {
        return fetch(`http://localhost:3001/pokemons?type=${type}`)
            .then(response => response.json())
            .then(json => {
                const regex = /^[0-9]*$/;
                let send;
                if(!FilterDB && !FilterAPI) send = json;
                if(FilterDB){
                    send = json.filter(pokemon => !regex.test(pokemon.id))
                }
                if(FilterAPI){
                    send = json.filter(pokemon => regex.test(pokemon.id))
                }
                dispatch({ type: "APPLY_FILTER", payload: send });
        });
    };
}

export function resetFilter(page) {
    return function(dispatch) {
        return fetch(`http://localhost:3001/pokemons?page=${page}`)
            .then(response => response.json())
            .then(json => {
                dispatch({ type: "RESET_FILTER", payload: json });
        });
    };
}

export function orderPokeALPHascen() {
    return function(dispatch) {
        return dispatch({ type: "ORDER_ALPHABETIC_ASCEN" });
    }
}

export function orderPokeALPHdescen() {
    return function(dispatch) {
        return dispatch({ type: "ORDER_ALPHABETIC_DESCEN" });
        }
}

export function orderPokeATTACKascen() {
    return function(dispatch) {
        return dispatch({ type: "ORDER_ATTACK_ASCEN" });
    }
}

export function orderPokeATTACKdescen() {
    return function(dispatch) {
        return dispatch({ type: "ORDER_ATTACK_DESCEN" });
        }
}

export function orderDefault() {
    return function(dispatch) {
        return dispatch({ type: "ORDER_DEFAULT" });
        }
}

export function filterDB() {
    return function(dispatch) {
        return dispatch({ type: "FILTER_JUST_DB" });
        }
}

export function filterAPI() {
    return function(dispatch) {
        return dispatch({ type: "FILTER_JUST_API" });
        }
}