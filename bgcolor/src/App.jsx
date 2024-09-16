// import { useState } from "react";
// function App(){
//   const [color, setColor] = useState("red")
//   return (
//     <div className="w-full h-screen duration-200"
//       style={{ backgroundColor: color }}>
//       <div className="fixed justify-center top-5 px-3">
//         <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white 
//          font-bold  px-4 rounded-lg">test
//           <button
//             onClick={() => setColor("green")}
//             className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
//             style={{ backgroundColor: "green" }}>green</button>
//           <button
//             onClick={() => setColor('yellow')}
//             className=" outline-none px-4 py-1 rounded-full text-white shadow-lg"
//             style={{ backgroundColor: "yellow" }}>yellow</button>
//           <button
//             onClick={() => setColor('black')}
//             className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
//             style={{ backgroundColor: "black" }}>black</button>
//           <button
  //           onClick={() => setColor('pink')}
  //            style={{ backgroundColor: "pink" }}>pink</button>
             
  //   </div>

  //      </div>
  //       </div>
  //  )

  // }
//  export default App
 import {useState} from "react";
 function App(){
   const[color,setColor]=useState("olive");
   return(
  <div className="w-full h-screen duration-200 "style={{backgroundColor:color}}>
    <div className="fixed justify-center top-5">
   <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-lg px-4">test</div>
 <button onClick={()=>setColor("yellow")}
   className=" outline-none px-4 py-1 rounded-full text-white shadow-lg font-bold "
   style={{backgroundColor:"yellow"}}>yellow</button> 
   <button
            onClick={() => setColor('pink')}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "pink" }}>pink</button>
            <button
            onClick={()=>setColor('blue')}
            className="outline-none px-4 py-1 rounded-full text-white shadow-1g"
            style={{backgroundColor:"green"}}>green</button>
            <button
            onClick={()=>setColor('black')}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor:"black"}}>black</button>
            <div><h1 className="text-4xl text-grey-500 justify-center">hello dear</h1></div>
    </div>
 </div> 
   )
 }
 export default App