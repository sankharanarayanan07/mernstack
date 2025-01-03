//USING PROPS

// function Stomach({name}){
    
//     return(
//         <div>
//        <h1>Stomach</h1> 
//        <h1>{name}</h1>  
//         </div>
//     )
// }
// export default Stomach;



//USING USECONTEXT

// import {useContext} from 'react'
// import {nameContext} from './App1.jsx'
// function Stomach(){
//     let name=useContext(nameContext);
//     return(
//         <div>
//        <h1>Stomach</h1> 
//        <h1>{name}</h1>  
//         </div>
//     )
// }
// export default Stomach;


//Background style and color change using useContext

import { useContext } from 'react';
import { nameContext } from './App1.jsx';

function Stomach() {
  const { name, click } = useContext(nameContext);

  const style = {
    backgroundColor: click ? "purple" : "white",
    textAlign: "center",
    color: click ? "white" : "black",
    padding: "0",
    margin: "0",
  };

  return (
    <div style={style}>
      <h1>Stomach {name}</h1>
    </div>
  );
}

export default Stomach;

