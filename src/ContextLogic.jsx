import React, { createContext, useState } from 'react'
import run from './Gemini'

export const AuthContext = createContext()

function ContextProvider(props){
    const [input, setInput] = useState('')
    const [recentPrompt, setRecentPrompt] = useState('')
    const [prevPrompt, setPrevPrompt] = useState([])
    const [showResult, setShowResult] = useState(false)
    const [loading, setLoading] = useState(false)
    const [resultData, setResultData] = useState('')
    const [clearScreen, setClearScreen] = useState(true)
    

    const newChat = () => {
        setLoading(false)
        setShowResult(false)
    }
    


    const onSent =  async (prompt) => {
        setLoading(true)
        setShowResult(false)
        setResultData('')
        let response;
        if (prompt !== undefined) {
            response =  await run(prompt)                
            setRecentPrompt(prompt)
            setPrevPrompt((prev) => [prompt, ...prev])    
        } else {
            response =  await run(input)                               
            setRecentPrompt(input)
            setPrevPrompt((prev) => [input, ...prev])        
        }
        setResultData(response)
        setInput("")
        }


    const contextValue = {newChat, clearScreen, setClearScreen, prevPrompt,setPrevPrompt,onSent,recentPrompt, showResult,setShowResult , loading,resultData, input, setInput }
    
    return (
        <>
            <AuthContext.Provider value={contextValue}>
                {props.children}
            </AuthContext.Provider>
        </>
    )

}

export default ContextProvider
