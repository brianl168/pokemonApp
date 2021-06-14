import { render, screen } from '@testing-library/react';
import Pokemons from './Pokemons';
import { Provider } from "react-redux";
import store from "../../store/index"

describe('Test the pokemon component', () => {
    it("Render the component without crash", () => {
        <Provider store={store}>
            <Pokemons />
        </Provider>
    });
});
