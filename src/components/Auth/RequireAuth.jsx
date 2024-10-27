import { Navigate } from "react-router-dom";
import { useAuth } from "./Auth";
import { useState, useEffect } from "react";

export const RequireAuth = ({ children }) => {
    const auth = useAuth();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChangedWrapper(user => {
            setLoading(false); // Stop loading once the state is determined
        });
        
        return () => unsubscribe(); // Cleanup subscription on unmount
    }, [auth]);

    if (loading) {
        // Show a loading spinner or message while checking the authentication state
        return <div>Loading...</div>;
    }

    if (!auth.user) {
        // If no user is authenticated, navigate to the login page
        return <Navigate to="/login" />;
    }

    return children;
};
