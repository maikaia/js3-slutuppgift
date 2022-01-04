import React, {useState} from 'react'

export default function CustomerCreate(props) {
    const [name, setName] = useState("")
    const [organisationNr, setOrganisationNr] = useState("")
    const [vatNr, setVatNr] = useState("")
    const [reference, setReference] = useState("")
    const [paymentTerm, setPaymentTerm] = useState("")
    const [website, setWebsite] = useState("")
    const [email, setEmail] = useState("")
    const[phoneNumber, setPhoneNumber] = useState("")
    
    function handleOnSubmit(e) {
        e.preventDefault()
        const url="https://frebi.willandskill.eu/api/v1/customers/"
        const payload = {name, organisationNr, vatNr, reference, paymentTerm, website, email, phoneNumber}
        const token = localStorage.getItem("webb21-slutuppgift")

        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
                "Authorization" : `Bearer ${token}`
            },
            body: JSON.stringify(payload)
        })
        .then(res => res.json())
        .then(data => props.onSuccess())
    }
    return (
        <div>
            Create Customer
            <form onSubmit={handleOnSubmit}>
                <input 
                    placeholder="Name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <input 
                    placeholder="Organisation Number"
                    value={organisationNr}
                    onChange={e => setOrganisationNr(e.target.value)}
                />
                <input 
                    placeholder="Vat Number"
                    value={vatNr}
                    onChange={e => setVatNr(e.target.value)}
                />
                <input 
                    placeholder="Reference"
                    value={reference}
                    onChange={e => setReference(e.target.value)}
                />
                <input 
                    placeholder="Payment Term"
                    value={paymentTerm}
                    onChange={e => setPaymentTerm(e.target.value)}
                />
                <input 
                    placeholder="Website"
                    value={website}
                    onChange={e => setWebsite(e.target.value)}
                />
                 <input 
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <input 
                    placeholder="Phone Number"
                    value={phoneNumber}
                    onChange={e => setPhoneNumber(e.target.value)}
                />
                <button type="submit">Create Customer</button>
            </form>
        </div>
    )
}
