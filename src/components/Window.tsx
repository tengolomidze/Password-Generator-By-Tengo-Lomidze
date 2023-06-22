import { FaRegCopy } from 'react-icons/fa';
import { useState } from 'react';

const Window = () => {
    const [password, setPassword] = useState("")

    const [lenght, setLenght] = useState(16)
    const [useUpper, setUseUpper] = useState(false)
    const [useLower, setUseLower] = useState(false)
    const [useNumbers, setUseNumbers] = useState(false)
    const [useSymbols, setUseSymbols] = useState(false)

    const generatePassword = () => {
        const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        const lower = "abcdefghijklmnopqrstuvwxyz"
        const numbers = "0123456789"
        const symbols = "$#@!%^&*<>"

        const chars = "" + (useUpper ? upper : "") + (useLower ? lower : "") + (useNumbers ? numbers : "") + (useSymbols ? symbols : "")

        if(chars === ""){
            return
        }

        let _password = ""

        for(let i = 0; i < lenght; i++){
            _password += chars[Math.floor(Math.random() * chars.length)]
        }
        console.log(_password)
        setPassword(_password)
    }
    const getStrength = () => {
        let stength = 0 + (useUpper ? 1 : 0) + (useLower ? 1 : 0) + (useNumbers ? 1 : 0) + (useSymbols ? 1 : 0) + (lenght <= 8 ? Math.floor(8/-lenght) : 0) + (lenght > 16 ? 1 : 0) + (lenght > 20 ? 1 : 0)
        if(!useUpper && !useLower && !useNumbers && !useSymbols){
            stength = 0
        }
        return stength
    }


    return (
      <div className="w-full max-w-[400px] h-fullflex flex-col items-center justify-center">
        <p className=" text-zinc-400 text-center mb-5 tex-sm" >Password Generator by Tengo Lomidze</p>
        <div className=" bg-zinc-900 h-14 w-full rounded-sm flex items-center justify-between px-4 mb-5">
            <p className="text-md text-zinc-500 hover:text-zinc-400 duration-200">{password ? password : "P4$$W0rD! h3rE"} </p>
            <FaRegCopy  onClick={() => {navigator.clipboard.writeText(password)}} className="click text-xl text-emerald-400 duration-100" ></FaRegCopy>
            
        </div>
        <div  className=" bg-zinc-900 w-full rounded-sm flex flex-col items-center justify-between p-4">
            <div className='flex w-full flex-col'>
                <div className='flex w-full items-center justify-between'>
                    <p className='text-zinc-400'>Character length</p>
                    <p className='text-xl text-emerald-400'>{lenght}</p>
                </div>  

                <div className='text-white flex w-full items-center justify-between'>
                    <input onChange={(e) => setLenght(Number(e.target.value))} type='range' min="4" max="32" defaultValue={16} step="1" className="mt-2 w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"/>
                </div>
            </div>

            <div className="flex w-full items-center  my-1 mt-5">
                <input onChange={(e) => setUseUpper(e.target.checked)} id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-emerald-400 bg-emerald-300 rounded ring-0 border-0 focus:ring-0 accent-emerald-400"/>
                <label  className="ml-2 text-sm font-medium text-zinc-400">Include Uppercase Letters</label>
            </div>
            <div className="flex w-full items-center  my-1">
                <input onChange={(e) => setUseLower(e.target.checked)} id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-emerald-400 bg-emerald-300 rounded ring-0 border-0 focus:ring-0 accent-emerald-400"/>
                <label  className="ml-2 text-sm font-medium text-zinc-400">Include Lowercase Letters</label>
            </div>
            <div className="flex w-full items-center  my-1">
                <input onChange={(e) => setUseNumbers(e.target.checked)} id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-emerald-400 bg-emerald-300 rounded ring-0 border-0 focus:ring-0 accent-emerald-400"/>
                <label  className="ml-2 text-sm font-medium text-zinc-400">Include Numbers</label>
            </div>
            <div className="flex w-full items-center  my-1">
                <input onChange={(e) => setUseSymbols(e.target.checked)} id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-emerald-400 bg-emerald-300 rounded ring-0 border-0 focus:ring-0 accent-emerald-400"/>
                <label className="ml-2 text-sm font-medium text-zinc-400">Include Symbols</label>
            </div>

            <div className='w-full bg-zinc-800 h-12 mt-4 rounded-sm flex items-center justify-between px-4'>
                <p className='text-zinc-400' >STRENGHT:</p>
                <div className='flex h-full py-2 items-center'>
                    <p className='text-zinc-200 mx-2 text-xl' >{getStrength() <= 0 ? "Very Weak" : getStrength() === 1 ? "Weak" : getStrength() === 2 ? "Medium" : getStrength() === 3 ? "Strong" : getStrength() >= 4 ? "Very Strong" : "" }</p>
                    <div className={'h-full w-2 mx-1 ' + (getStrength() > 0 ? " bg-emerald-400" : "bg-red-500" )}></div>
                    <div className={'h-full w-2 mx-1 ' + (getStrength() > 1 ? " bg-emerald-400" : "bg-red-500" )}></div>
                    <div className={'h-full w-2 mx-1 ' + (getStrength() > 2 ? " bg-emerald-400" : "bg-red-500" )}></div>
                    <div className={'h-full w-2 mx-1 ' + (getStrength() > 3 ? " bg-emerald-400" : "bg-red-500" )}></div>
                </div>
            </div>
            <button onClick={generatePassword} className= 'text-xl w-full h-12 mt-4 rounded-sm bg-emerald-400 border-2 duration-200 border-emerald-400 hover:bg-transparent hover:text-zinc-300 '>Generate</button>
        </div>
        <p className='mt-2 text-center text-zinc-400'><a href='https://github.com/tengolomidze' className='underline mx-1'>github</a>    <a href='https://www.linkedin.com/in/tengo-lomidze-261195232/' className=' underline mx-1'>linkedin</a></p>
      </div>
    )
  }
  
  export default Window 