import React, { useEffect, useState } from 'react';
import {Router, Link, navigate} from '@reach/router';

import axios from 'axios';

const Details = (props) => {
    const [individualPet, setIndividualPet] = useState({})


    const adoptPet = (e) => {
        console.log("TRYING TO ADOPT THIS PET, REMOVING FROM DATABSE")
        axios.delete(`http://localhost:8000/api/exam/delete/${props.specificid}`)
            .then(response => {
                console.log("SUCC TRYING TO DETELE")
                console.log(response)
                navigate('/')

            })
            .catch(err => console.log(err))
    }
    
    
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/exam/${props.specificid}`)
            .then(response => {
                console.log("SUCCESS: Got a response for specific", response)
                setIndividualPet(response.data.results)
            })
            .catch(err => console.log(err))
    }, [])

    return(
        
        <div>
            <div>
            <button className="btn btn-success" onClick={adoptPet}>Adopt {individualPet.name}!</button>

            </div>
            <h3>Pet Details: {individualPet.name}</h3>
            <p>Type: {individualPet.type}</p>
            <p>Description: {individualPet.description}</p>

            <p>Skill1: {individualPet.skill1}</p>

            <p>Skill2: {individualPet.skill2}</p>

            <p>Skill3: {individualPet.skill3}</p>
            
            <button><Link to={`/pet/edit/${individualPet._id}`} >Edit</Link></button>

            
        </div>
    )
}

export default Details