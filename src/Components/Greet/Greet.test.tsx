/*
* Greet should render the text hello and if a name is passed into the component
* it should render hello followed by the name
*/

import { render, screen } from "@testing-library/react"
import Greet from "./Greet"

test('greet renders correctly',()=>{
    render(<Greet/>);
    const greetText = screen.getByText("hello");
    expect(greetText).toBeInTheDocument();
})

test('greet renders print hello followed by name',()=>{
    render(<Greet name={"milind"}/>);
    const greetText = screen.getByText("hello milind");
    expect(greetText).toBeInTheDocument();
})   