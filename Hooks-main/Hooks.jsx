
//HOOKS-USESTATE=>It is used to store the value of the variable and re-render the component when the value of the variable is changed.
//HOOKS-USEEFFECT=>It is used to perform the side effects in the component. It is similar to the lifecycle methods in class components.

// import { useState, useEffect } from 'react';

// function Hooks() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log("value updated");
//   }, [count]); 

//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={() => setCount(count + 1)}>++</button>
//       <button onClick={() => setCount(count - 1)}>--</button>
//     </div>
//   );
// }

// export default Hooks;



//UseRef-it only track the particular value and does not re-render the  whole component

// import { useState, useRef } from 'react';

// function Hooks() {
//   const [count, setCount] = useState(0); 
//   const countRef = useRef(0); 

//   const increment = () => {
//     setCount(count + 1); 
//     countRef.current++; 

//     console.log("State:", count); 
//     console.log("Ref:", countRef.current);
//   };

//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={increment}>+++++</button>
//     </div>
//   );
// }

// export default Hooks;



//Hooks  => if input is given in the input box,the changes should also be updated in the console.
//TASK

import { useState, useEffect } from "react";
function Hooks() {
  const [name, setName] = useState("");
  useEffect(() => {
    console.log(name); 
  }, [name]); 

  return (
    <div>
      <h1>Enter the input:</h1>
      <input type="text"value={name}onChange={(e) => setName(e.target.value)} placeholder="Enter the input"/>
    </div>
  );
}
export default Hooks;



