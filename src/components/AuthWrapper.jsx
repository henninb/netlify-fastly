import { createContext, useContext, useState } from "react"
import { Routes } from "react-router-dom";

const AuthContext = createContext();
export const AuthData = () => useContext(AuthContext);


export default function AuthWrapper() {

     const [ user, setUser ] = useState({name: "", isAuthenticated: false})

     const login = (userName, password) => {

          // Make a call to the authentication API to check the username
          return new Promise((resolve, reject) => {

               if (password === "password") {
                    setUser({name: userName, isAuthenticated: true})
                    resolve("success")
               } else {
                    reject("Incorrect password")
               }
          })
     }
     const logout = () => {
          setUser({...user, isAuthenticated: false})
     }

     console.log('isAuthenticated:' + user.isAuthenticated)

     return (
               <AuthContext.Provider value={{user, login, logout}}>
                    <>
                    <Routes>
                    if (user.isAuthenticated) {
                    }
                    </Routes>
                    </>
               </AuthContext.Provider>
     )

}
