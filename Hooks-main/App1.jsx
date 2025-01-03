
// import Hen from './Hen.jsx';
//USING PROPS => (app1 -> hen -> egg -> halfboil -> stomach)
// function App1(){
    
//     return(
//         <div>
        
//        <Hen name="water"/>
//        </div>
//     )
// }
// export default App1;



//using name context and create context

// import { createContext } from 'react';
// export  let nameContext=createContext();
// function App1(){
    
//     return(
//         <nameContext.Provider value="water">
//        <Hen />
//        </nameContext.Provider>
//     )
// }
// export default App1;


//TASK:Button clicking

// import { useState, createContext } from 'react';
// export  let colorChange=createContext();

// function App1(){
    
//     let[color,setColor]=useState(false);

//     return(
//         <colorChange.Provider value={color}>
//         <button onClick={()=>setColor(!color)}>Click</button>
//         <Hen />
//        </colorChange.Provider>
//     )
// }
// export default App1;



//UseMemo
import React, { useState, useMemo, useEffect } from 'react';
function App(){
  let [Number, setNumber] = useState(0);
  let [dark, setDark] = useState(false);
  let doubleNum = useMemo(() =>{
    return slowFunction(Number);
  },[Number]);
  let themstyle = useMemo(() =>{
    return {
      backgroundColor: dark ? 'black' : 'white',
       color: dark ? 'white' : 'black',
    }
    
  },[dark]);
  useEffect(() => {
    console.log("Theme Changed");
  },[themstyle]
);
  return(
    <div>
      <input type="number" value={Number} onChange={(e) => setNumber(e.target.value)} />
      <button onClick={() => setDark((val)=>!val)}>Change Theme</button>
      <div style={themstyle}>{doubleNum}</div>
    </div>
  )
}
export default App; 
function slowFunction(num){
  console.log("slow function")
   for(let i=0; i<=1000000000; i++){}
   return num*2;
 }


