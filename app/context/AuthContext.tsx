"use client"
import { createContext, useContext, useState, ReactNode, useEffect } from "react"

interface AuthContextType {
  isLoggedIn: boolean
  login: () => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
})

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  // ここで localStorage やクッキーから認証状態を読み込む処理を入れることもできます
  useEffect(() => {
    const storedStatus = localStorage.getItem("isLoggedIn")
    if (storedStatus === "true") {
      setIsLoggedIn(true)
    }
  }, [])

  const login = () => {
    setIsLoggedIn(true)
    localStorage.setItem("isLoggedIn", "true")
  }

  const logout = () => {
    setIsLoggedIn(false)
    localStorage.removeItem("isLoggedIn")
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
