import { useContext,createContext,useState } from "react";

const useContext = createContext()

function ComponentB(){
    return (<>
    <h1> component B</h1>
    <ComponentC/>
    </>)
}

function ComponentC(){
    const user  = useContext(useContext)
    return(
        <div>
            <h1>component c</h1>
            <p>User : {user} </p>
        </div>
    )
}