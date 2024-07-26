import { createContext } from "react";

type ListContextData = {}


export const ListContext = createContext<ListContextData>({})

export default function ListProvider({ children }: any) {
    
    const output = {}
    return (
        <ListContext.Provider value={output}>
            {children}
        </ListContext.Provider>
    )
}