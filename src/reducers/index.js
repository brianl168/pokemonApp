
const initialState = {
    pokemons: [],
    DBpokemons: [],
    APIpokemons: [],
    Types: []
};
//Normal, Fighting, Flying, Poison, Ground, Rock, Bug, Ghost, Steel, Fire, Grass, Water, Electric, Psychic, Ice, Dragon, Dark and Fairy.
function rootReducer(state = initialState, action) {

    if (action.type === "GET_POKEMONS") {
        return {
            ...state,
            pokemons: state.pokemons.concat(action.payload)
        }
    }
    if (action.type === "APPLY_FILTER") {
        if(action.deepSearch){
            if(state.Types.length === 0){
                state.Types = state.pokemons
                state.pokemons = state.Types
            }else{
                state.pokemons = state.Types
            }
            let pokefiltered = state.pokemons.filter(pokemon => pokemon.type.includes(action.typePO))
            return {
                ...state,
                pokemons: pokefiltered
            }
        }

        return {
            ...state,
            pokemons: action.payload
        }
    }
    if (action.type === "RESET_FILTER") {
        return {
            ...state,
            pokemons: []
        }
    }

    if (action.type === "ORDER_ALPHABETIC_ASCEN") {
        let OrderedPokemons = {...state};
        OrderedPokemons = OrderedPokemons.pokemons.sort(function(a, b){
            if(a.name < b.name) { return -1; }
            if(a.name > b.name) { return 1; }
            return 0;
        });

        return {
            ...state,
            pokemons: OrderedPokemons
        }
    }

    if (action.type === "ORDER_ALPHABETIC_DESCEN") {
        let OrderedPokemons = {...state};
        OrderedPokemons = OrderedPokemons.pokemons.sort(function(a, b){
            if(a.name > b.name) { return -1; }
            if(a.name < b.name) { return 1; }
            return 0;
        });
        return {
            ...state,
            pokemons: OrderedPokemons
        }
    }

    if (action.type === "ORDER_ATTACK_ASCEN") {
        let OrderedPokemons = {...state};
        OrderedPokemons = OrderedPokemons.pokemons.sort(function(a, b){
            if(a.attack < b.attack) { return -1; }
            if(a.attack > b.attack) { return 1; }
            return 0;
        });
        return {
            ...state,
            pokemons: OrderedPokemons
        }
    }

    if (action.type === "ORDER_ATTACK_DESCEN") {
        let OrderedPokemons = {...state};
        OrderedPokemons = OrderedPokemons.pokemons.sort(function(a, b){
            if(a.attack > b.attack) { return -1; }
            if(a.attack < b.attack) { return 1; }
            return 0;
        });
        return {
            ...state,
            pokemons: OrderedPokemons
        }
    }

    if (action.type === "ORDER_DEFAULT") {
        const regex = /^[0-9]*$/;
        let OrderedPokemons = {...state};
        let DBpokemons = OrderedPokemons.pokemons.filter(pokemon => !regex.test(pokemon.id));
        OrderedPokemons.pokemons = OrderedPokemons.pokemons.filter(pokemon => regex.test(pokemon.id))
        OrderedPokemons = OrderedPokemons.pokemons.sort(function(a, b){
            if((+ a.id) < (+ b.id)) { return -1; }
            if((+ a.id) > (+ b.id)) { return 1; }
            return 0;
        });
        return {
            ...state,
            pokemons: DBpokemons.concat(OrderedPokemons)
        }
    }

if (action.type === "FILTER_JUST_DB") {
    const regex = /^[0-9]*$/;
    let OrderedPokemons = {...state};
    if(state.DBpokemons.length !== 0){
        state.pokemons = state.DBpokemons;
    }else{
        state.APIpokemons = OrderedPokemons.pokemons.filter(pokemon => regex.test(pokemon.id));
        state.DBpokemons= OrderedPokemons.pokemons.filter(pokemon => !regex.test(pokemon.id));
    }
    OrderedPokemons = state.DBpokemons;
    return {
        ...state,
        pokemons: OrderedPokemons
    }
}

if (action.type === "FILTER_JUST_API") {
    const regex = /^[0-9]*$/;
    let OrderedPokemons = {...state};
    if(state.APIpokemons.length !== 0){
        state.pokemons = state.APIpokemons;
    }else{
        state.APIpokemons = OrderedPokemons.pokemons.filter(pokemon => regex.test(pokemon.id));
        state.DBpokemons= OrderedPokemons.pokemons.filter(pokemon => !regex.test(pokemon.id));
    }
    OrderedPokemons = state.APIpokemons;
    return {
        ...state,
        pokemons: OrderedPokemons
    }
}
return state;
}

export default rootReducer;