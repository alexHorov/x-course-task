import { Count } from "./Count";
import { render, cleanup, fireEvent } from '@testing-library/react'

// const incrementBtn = screen.getByTestId('count__up');
// const decrementBtn = screen.getByTestId('count__down');
// const counter = screen.getByTestId('count__input');

// afterEach(cleanup)
test("The counter should increment", () => {
    let { getByTestId } = render(<Count />)
    fireEvent.click(getByTestId('count__up'))

    expect(getByTestId('count__input')).toHaveTextContent('2')
});

test('The counter should deCrement', () => {
    const { getByTestId } = render(<TestEvents />);

    fireEvent.click(getByTestId('count__down'))

    expect(getByTestId('count__input')).toHaveTextContent('1')
});

    //  render(<Count />)
    // fireEvent.click(incrementBtn);
    // expect(counter).toBe(2);


// })


// describe("The counter should increment", () => {
//     beforeAll(() => {
//         cities = new Cities()
//     })
//     afterAll(() => {
//         cities = new Cities()
//     })

//     test('Kyiv should be inside', () => {
//         expect(cities.list.has('Kyiv')).toBeTruthy()
//     })
//     test('List should have 2 cities', () => {
//         expect(cities.list.size).toBe(2)
//     })
// })

