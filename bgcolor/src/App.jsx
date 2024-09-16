import {useState} from "react";
function App(){

  const[color,setColor]=useState("red")
  return(
    <div className="w-full h-screen duration-200"
     style={{backgroundColor:color}}>
      <div className="fixed justify-center top-5 px-3">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white  font-bold  px-4 rounded-lg">test
          <button 
          onClick={()=>setColor("green")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"green"}}>green</button>
          <button
          onClick={()=>setColor('yellow')}
          className=" outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"yellow"}}>yellow</button>
          <button 
          onClick={()=>setColor('black')}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"black"}}>black</button>
          <button 
          onClick={()=>setColor('pink')}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"pink"}}>pink</button>

        </div>
      </div>
    </div>
  )

}
export default App