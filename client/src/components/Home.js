import React, { useEffect, useState } from 'react';
import {Router, Link} from '@reach/router';

import axios from 'axios';
const Home = () => {
    const [allPets, setAllPets] = useState([])
    useEffect(() => {
        axios.get("http://localhost:8000/api/exam/all")
            .then(response => {
                console.log("SUCCESS: Got all entrys from database")
                console.log(response)
                setAllPets(response.data.results)
            })
            .catch(err => console.log(err))
    }, [])


    return(
        <div>
        <h3>These Pets Need A Home</h3>
        {allPets.map((pet, i) => {
            return <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Pets Name: {pet.name}</h5>
                            <p>Type: {pet.type}</p>
                            <p>Description: {pet.description}</p>
                            <p>Skill 1: {pet.skill1}</p>
                            <p>Skill 2: {pet.skill2}</p>
                            <p>Skill 3: {pet.skill3}</p>
                            <button><Link to ={`/pet/${pet._id}`}>Details</Link></button>
                        </div>
                    </div>
        })}
        </div>
    )
}

export default Home