import React from 'react'
import { Navigate } from 'react-router-dom'

export default function PrivateRoute({children}) {
    const token = localStorage.getItem("webb21-slutuppgift")
    return (
        <div>
            {token ? <>
                {children}
            </>: <Navigate to="/login" />}
        </div>
    )
}
