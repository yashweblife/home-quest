import { useRouter } from "expo-router";
import { createContext, useState } from "react";
type AuthContextData = {
    isAuthenticated: boolean
    login: (email:string, password:string) => void
    logout: () => void
    signup: (email:string, password:string, passwordConfirm:string, name:string) => void
}

export const AuthContext = createContext<AuthContextData>({
    isAuthenticated: false,
    login: () => {},
    logout: () => {},
    signup: () => {},
})

export function AuthProvider({ children }: any) {
    const router = useRouter()
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const login = (email:string, password:string) => {
        setIsAuthenticated(true)
        router.push('(tabs)')
    }

    const logout = () => {
        setIsAuthenticated(false)
        router.push('(login)')
    }

    const signup = (email:string, password:string, passwordConfirm:string, name:string) => {
        setIsAuthenticated(true)
    }

    const output = { isAuthenticated, login, logout, signup }
    return(
        <AuthContext.Provider value={output}>
            {children}
        </AuthContext.Provider>
    )
}