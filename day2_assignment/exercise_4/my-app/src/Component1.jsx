import { useEffect,useRef,useState } from "react"
export default function Component1(){


    const inputRef = useRef()
    const [name,setName] = useState ('john')

    useEffect(()=>{
        setName("doe")

    },[name])
     return (<>
    <nput type="text" ref = {inputRef} value = {name} placeholder = 'enter something' ></nput>
    </>)
}