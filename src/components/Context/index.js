import React,{createContext,useContext} from "react";

const loadContext= React.createContext();

export default function loadContextProvider({children}){
    const [Load, setLoad] = React.useState(false);
    
    return(
        <loadContext.Provider value={{Load,setLoad}}>
            {children}
        </loadContext.Provider>
    )};


export function useLoadContext(){
    return useContext(loadContext)
}



