import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react/cjs/react.development'
import MyButton from '../components/MyButton'
import PrivateRoute from '../components/PrivateRoute'

export default function MyPage() {
    const [myData, setMyData] = useState(null)

    useEffect(() => {
        const url = "https://frebi.willandskill.eu/api/v1/me"
        const token = localStorage.getItem("webb21-slutuppgift")

        fetch(url, {
            headers: {
                "Content-Type" : "application/json",
                "Authorization" : `Bearer ${token}`
            }
        })
        .then(res => res.json())
        .then(data => setMyData(data))
    }, [])

    return (
        <PrivateRoute>
            <div>
                <Link to="/home" style={{float:"right"}}><MyButton>Home Page</MyButton></Link>
                <h1>My Information</h1>
                {myData && (
                    <>
                        <p><b>Email:</b> {myData.email}</p>
                        <p><b>First Name:</b> {myData.firstName}</p>
                        <p><b>Last Name:</b> {myData.lastName}</p>    
                    </>
                )}
                
            </div>
        </PrivateRoute>
    )
}
