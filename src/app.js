import { addNumbers } from "./utils/add.js";
import { subtractNumbers } from "./utils/subtract.js";
import { multiplyNumbers } from "./utils/multiply.js";
import { divideNumbers } from "./utils/divide.js";

console.log(addNumbers(1, 1));
console.log(subtractNumbers(1, 1));
console.log(multiplyNumbers(1, 1));
console.log(divideNumbers(1, 1));

const App = () => <h1>HELLO REACT WORLD WITH JSX</h1>;
ReactDOM.render(<App />, document.getElementById('root'));