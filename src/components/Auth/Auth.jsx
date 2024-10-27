import { createContext, useContext, useEffect, useState } from "react";
import { firebase } from "../../firebase/config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [token, setToken] = useState(null)
    const auth = getAuth(firebase);

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
            if(userCredential){
                console.log("logged in\n", userCredential.user);
                
                setUser(userCredential.user)
            }
            else{
                setUser(null)
            }
        })
        .catch(e => {
            console.log("error");
            
        })

    }

    const signup = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
            if(userCredential){
                console.log("signed up");
                setUser(userCredential.user)
            }
        })
    }

    const logout = () => {
        return signOut(auth).then(() => {
            console.log("Sign-out successful");
            setUser(null)
            setToken(null)
        })
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (userCredential) => {
            if(userCredential){
                console.log("Auth state changed to loggedin");
                setUser(userCredential)
                userCredential.getIdToken().then(token => {
                    setToken(token)
                })
                
            }
            else{
                console.log("Auth state changed to loggedout");
                setUser(null);
                setToken(null);
            }
        })

        return () => unsubscribe();
    }, [])

    const onAuthStateChangedWrapper = (callback) => {
        return onAuthStateChanged(auth, (userCredential) => {
            if (userCredential) {
                userCredential.getIdToken().then(token => {
                    setToken(token);
                    setUser(userCredential);
                });
            } else {
                setUser(null);
                setToken(null);
            }
            // Call the callback to indicate state change
            callback(userCredential);
        });
    };

    return (
        <AuthContext.Provider value={{user, token, login, signup, logout, onAuthStateChangedWrapper}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
}