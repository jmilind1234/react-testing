import { render, screen } from "@testing-library/react"
import { CounterTwo } from "./counter-two"
import user from "@testing-library/user-event"
describe("CounterTwo",()=>{
    test("renders correctly",()=>{
        render(<CounterTwo count={0}/>);
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
    });

    test("calls the increment and decrement handlers 1 time max", async ()=>{
        user.setup();
        const incrementHandler = jest.fn();
        const decrementHandler = jest.fn();
        render(<CounterTwo count={0} handleIncrement={incrementHandler} handleDecrement={decrementHandler}/>)

        const decBtn = screen.getByRole("button",{
            name: "Decrement"
        });

        const incBtn = screen.getByRole("button",{
            name: "Increment"
        })

        await user.click(incBtn);
        expect(incrementHandler).toHaveBeenCalledTimes(1);

        await user.click(decBtn);
        expect(decrementHandler).toHaveBeenCalledTimes(1);
    })
})