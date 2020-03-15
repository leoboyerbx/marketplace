import React from 'react';
import ReactDOM from 'react-dom'
import {CartIndicator} from "./CartIndicator";
import {cartData} from "../../testingData";
import {act, scryRenderedComponentsWithType} from "react-dom/test-utils";
import products from "../../fakeData/products";

let container
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

describe("Cart Indicator", () => {
    it('renders without crashing', () => {
        act(() => {
            ReactDOM.render(<CartIndicator cart={ cart } />, container)
        });
        expect(container.querySelector('.ant-badge-count')).toBeNull()
    });
    it('displays number of articles', () => {
        cart.add(products[0])
        act(() => {
            ReactDOM.render(<CartIndicator cart={ cart } />, container)
        });
        expect(container.querySelector('.ant-badge-count').title).toBe('1')
    });
})

