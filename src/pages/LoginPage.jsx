import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import PrivateRoute from '../components/PrivateRoute'

export default function LoginPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    function renderInput(type, value, setValue, placeholder) {
        return (
            <input 
                type={type}
                value={value}
                onChange = {e => setValue(e.target.value)}
                placeholder={placeholder}
            />
        )
    }

    function handleOnSubmit(e) {
        e.preventDefault()
        const url="https://frebi.willandskill.eu/api-token-auth/"
        const payload = {email, password}

        fetch(url, {
            method:"POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(payload)
        })
        .then(res => res.json())
        .then(data => {
            const token = data.token
            localStorage.setItem("webb21-slutuppgift", token)
            navigate("/home")
        })
    }

    return (
        <PrivateRoute>
            Login
            <form onSubmit={handleOnSubmit}>
                {renderInput("text", email, setEmail, "Email")}
                {renderInput("password", password, setPassword, "Password")}
                <button type="submit">Login</button>
            </form>
        </PrivateRoute>
    )
}
