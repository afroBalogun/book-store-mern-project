import React from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({children}){
    const {currentUser, loading} = useAuth();
    if(loading) {
        return (
        <div>
            <h1>Loading...</h1>
        </div>
            
           );
    }
    if(currentUser) {
        return children;
    }
    return <Navigate to="/login" replace/>
}