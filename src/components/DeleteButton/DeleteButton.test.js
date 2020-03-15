import React from 'react';
import ReactDOM from 'react-dom'
import {cartData} from "../../testingData";
import {act, Simulate} from "react-dom/test-utils";
import DeleteButton from "./DeleteButton";


let container
const getByTestId = id => {
    return container.querySelector(`[data-testid="${id}"]`)
}
const cart = cartData

beforeEach(() => {
    // met en place un élément DOM comme cible de rendu
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // nettoie en sortie de test
    ReactDOM.unmountComponentAtNode(container);
    container.remove();
    container = null;
});


describe("Delete Button", () => {
    it('renders without crashing', () => {
        act(() => {
            ReactDOM.render(<DeleteButton />, container)
        });
    });
})

