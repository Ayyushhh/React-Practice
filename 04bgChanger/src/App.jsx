import { useState } from "react"


function App() {
  const [color, setColor] = useState("olive")
  return (
    <>
      <div className="w-full h-screen" style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-lg">
            <button className="outline-none px-4 py-1 rounded-md shadow-lg" style={{backgroundColor: "red"}} onClick={() => setColor("Red")}>Red</button>
            <button className="outline-none px-4 py-1 rounded-md shadow-lg" style={{backgroundColor: "green"}} onClick={() => setColor("Green")}>Green</button>
            <button className="outline-none px-4 py-1 rounded-md shadow-lg" style={{backgroundColor: "blue"}} onClick={() => setColor("Blue")}>Blue</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
