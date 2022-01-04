import React, {useState, useEffect, useContext} from 'react'
import { Link, useParams } from 'react-router-dom'

export default function DetailPage() {
    const [detail, setDetail] = useState(null)
    

    const params = useParams()
    const id = params.id

    useEffect(() => {
        const url = `https://frebi.willandskill.eu/api/v1/customers/${id}`
        const token = localStorage.getItem("webb21-slutuppgift")

        fetch(url, {
            headers: {
                "Content-Type" : "application/json",
                "Authorization" : `Bearer ${token}`
            }
        })
        .then(res => res.json())
        .then(data => 
            {setDetail(data.results)
            console.log(detail)}
            )
    }, [])
    
    return (
        <div>
            <h1>Detail</h1>
            <Link to="/home">Home Page</Link>
            {detail && (    
            <>
                <h3>{detail[0].name}</h3> 
                <p>{detail[0].organisationNr}</p>
                <p>{detail[0].vatNr}</p>
                <p>{detail[0].reference}</p>
                <p>{detail[0].paymentTerm}</p>
                <p>{detail[0].website}</p>
                <p>{detail[0].email}</p>
                <p>{detail[0].phoneNumber}</p>    
            </>
            )}
            
        </div>
    )
    
}
