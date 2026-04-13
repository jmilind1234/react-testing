interface GreetProps {
  name?: string;
}

function Greet({ name }: GreetProps) {
  return <h1>hello {name ? name : ""}</h1>;
}

export default Greet; 
