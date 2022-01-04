import React from 'react'
import {Link} from "react-router-dom"
import MyButton from '../components/MyButton'

export default function StartPage() {
    return (
        <div>
            <h1>Start Page</h1>
            <Link to="/login"><MyButton>Login</MyButton></Link>
        </div>
    )
}
