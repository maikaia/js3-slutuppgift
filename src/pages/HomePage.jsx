import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import CustomerCreate from '../components/CustomerCreate'
import MyButton from '../components/MyButton'
import PrivateRoute from '../components/PrivateRoute'


export default function HomePage() {
    const [customer, setCustomer] = useState(null)

    useEffect(() => {
        fetchData()
    }, [])

    function fetchData() {
        const url="https://frebi.willandskill.eu/api/v1/customers/"
        const token = localStorage.getItem("webb21-slutuppgift")

        fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
        .then(res => res.json())
        .then(data => setCustomer(data.results))
            
    }

    function bla(id){
        id = id.target.id
        document.getElementById("demo").innerHTML = `Details about ${customer[id].name}`
        document.getElementById("bla").innerHTML = ""
        document.getElementById("organisationNr").innerHTML = `<b>Org.Nr:</b> ${customer[id].organisationNr}`
        document.getElementById("vatNr").innerHTML = `<b>VatNr:</b> ${customer[id].vatNr}`
        document.getElementById("reference").innerHTML = `<b>Reference:</b> ${customer[id].reference}`
        document.getElementById("paymentTerm").innerHTML = `<b>Payment Term:</b> ${customer[id].paymentTerm}`
        document.getElementById("website").innerHTML = `<b>Website:</b> ${customer[id].website}`
        document.getElementById("email").innerHTML = `<b>Email:</b> ${customer[id].email}`
        document.getElementById("phoneNumber").innerHTML = `<b>Phone Number:</b> ${customer[id].phoneNumber}`
    }

    return (
        <PrivateRoute>
            <Link to="/my-page" style={{float:"right"}}><MyButton>My Account</MyButton></Link>
            <h1>Home Page</h1>
                <CustomerCreate onSuccess={fetchData}/>
            <div style={{display:"flex"}}>
                <div style={{width:"50%", border:"2px solid black", margin:"5px"}}>
                <h3>Customer list</h3>
                    {customer && customer.map((item, index) => {
                        return (
                            <div key={index}>
                                <p>{item.name}</p>
                                <button onClick={bla} id={index}>Show Details</button>
                            </div>
                        )
                    })}
                </div>
                {customer && (
                    <div>
                        <h3  id="demo">Details about Customer</h3>
                        <p id="bla">(Click on a customer)</p>
                        <p id="organisationNr"></p>
                        <p id="vatNr"></p>
                        <p id="reference"></p>
                        <p id="paymentTerm"></p>
                        <p id="website"></p>
                        <p id="email"></p>
                        <p id="phoneNumber"></p>
                    </div>
                )}
            </div>
        </PrivateRoute>
    )
}
