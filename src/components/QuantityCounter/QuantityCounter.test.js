import React from 'react';
import ReactDOM from 'react-dom'
import {cartData} from "../../testingData";
import {act, Simulate} from "react-dom/test-utils";
import products from "../../fakeData/products";
import QuantityCounter from "./QuantityCounter";


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

const QuantityCounterWrapper = props => {
    // Un wrapper pour permettre de teste l'incrémentation du component
    const [val, setVal] = React.useState(props.value)
    const increase = () => {
        setVal(val + 1)
    }
    const decrease = () => {
        setVal(val - 1)
    }
    return (
        <QuantityCounter value={val} min={props.min} max={props.max} onPlus={increase} onMinus={decrease} />
    )

}

describe("Quantity Counter", () => {
    it('renders without crashing', () => {
        act(() => {
            ReactDOM.render(<QuantityCounter />, container)
        });
        expect(getByTestId('quantity-value').textContent).toBe('0')
    });
    it('renders without crashing when given a value', () => {
        act(() => {
            ReactDOM.render(<QuantityCounter value={4} />, container)
        });
        expect(getByTestId('quantity-value').textContent).toBe('4')
    });
    it('handles incrementing data', () => {
        act(() => {
            ReactDOM.render(<QuantityCounterWrapper value={4} />, container)
        });
        expect(getByTestId('quantity-value').textContent).toBe('4')
        const button = getByTestId('button-plus')
        act(() => {
            Simulate.click(button)
        })
        expect(getByTestId('quantity-value').textContent).toBe('5')
    });
    it('handles decrementing data', () => {
        act(() => {
            ReactDOM.render(<QuantityCounterWrapper value={4} />, container)
        });
        expect(getByTestId('quantity-value').textContent).toBe('4')
        const button = getByTestId('button-minus')
        act(() => {
            Simulate.click(button)
        })
        expect(getByTestId('quantity-value').textContent).toBe('3')
    });
    it('handles minimum values', () => {
        act(() => {
            ReactDOM.render(<QuantityCounterWrapper min={3} value={4} />, container)
        });
        expect(getByTestId('quantity-value').textContent).toBe('4')
        const button = getByTestId('button-minus')
        act(() => {
            Simulate.click(button)
        })
        expect(getByTestId('quantity-value').textContent).toBe('3')
        act(() => {
            Simulate.click(button)
        })
        expect(getByTestId('quantity-value').textContent).toBe('3')
    });
    it('handles maximum values', () => {
        act(() => {
            ReactDOM.render(<QuantityCounterWrapper max={5} value={4} />, container)
        });
        expect(getByTestId('quantity-value').textContent).toBe('4')
        const button = getByTestId('button-plus')
        act(() => {
            Simulate.click(button)
        })
        expect(getByTestId('quantity-value').textContent).toBe('5')
        act(() => {
            Simulate.click(button)
        })
        expect(getByTestId('quantity-value').textContent).toBe('5')
    });

})

