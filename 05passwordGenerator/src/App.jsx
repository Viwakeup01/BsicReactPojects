import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [numAllowed, setnumAllowed]= useState(false)
  const [charAllowed, setcharAllowed]= useState(false)
  const [password, setPassword]= useState("")

  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
     let pass=""
     let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwzyz"
     if(numAllowed) str+="0123456789"
     if(charAllowed) str+="!@#$%^&*-=[]{}~`"

     for (let i = 1; i <= length; i++){
      let char= Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char) 
     } 
     setPassword(pass) 
     }, [length, numAllowed, charAllowed, setPassword])

     const copyPasswordToClipboard = useCallback(() => {
      passwordRef.current?.select();
      passwordRef.current?.setSelectionRange(0,20);
      window.navigator.clipboard.writeText(password)
     }, [password])

     useEffect(() => { 
      passwordGenerator()
     } ,[length, numAllowed, charAllowed, passwordGenerator] )
  return (
    <>
    <div className='w-full max-md mx-auto shadow-md rounded-lg
    px-4 my-8 text-orange-500 bg-gray-700'>
      <h1 className='text-4xl text-center text-white'>Password Generator</h1>
      <div className='className="flex shadow rounded-lg
      px-4 my-8 text-orange-500 bg-gray-700'>
        <input type="text"
         value={password}
         className='outline-none w-full py-1 px-3'
         placeholder='password'
         readOnly
         ref={passwordRef}
        />
        <button
        onClick={copyPasswordToClipboard} 
        className='outline-none bg-blue-700 text-white 
        px-3 py-0.5 shrink-0'>
          copy
        </button>
      </div> 
      <div className='flex text-sm gap-x-2'>
      <div className='flex item-center gap-x-1'>
          <input 
          type="range"
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e) => {setlength(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>
        <div className='flex items-center gap-x-1'>
        <input 
          type="checkbox"
          defaultChecked={numAllowed}
          id='numberInput'
          onChange={() => {
            setnumAllowed((prev) => !prev);
          }}
          />
          <label htmlFor="numberInput">Numbers</label>
          </div>
        <div className='flex items-center gap-x-1'>
        <input 
          type="checkbox"
          defaultChecked={charAllowed}
          id='charInput'
          onChange={() => {
            setcharAllowed((prev) => !prev);
          }}
          />
          <label htmlFor="charInput">Characters</label>
          </div>
      </div>
    </div> 
    </>
  )
} 

export default App
