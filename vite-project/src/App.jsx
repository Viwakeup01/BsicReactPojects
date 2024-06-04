
function App() {
  const [color,  setColor] = useState("black")

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex0-wrap justify-center gap-3
        shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button className="outline-none px-4 py-1
          rounded-full text-white shadow-lg"
          style={{backgroundColor: "red"}}> red</button>

<button className="outline-none px-4 py-1
          rounded-full text-white shadow-lg"
          style={{backgroundColor: "green"}}> green</button>
 <button className="outline-none px-4 py-1
          rounded-full text-white shadow-lg"
          style={{backgroundColor: "blue"}}> blue</button>
        </div>
        <button className="outline-none px-4 py-1
          rounded-full text-white shadow-lg"
          style={{backgroundColor: "yellow"}}> yellow</button>
      </div> <button className="outline-none px-4 py-1
          rounded-full text-white shadow-lg"
          style={{backgroundColor: "violet"}}>violet</button>
     
    </div>
  )
}

export default App
