import React, { useEffect, useState } from 'react';
import {Router, Link, navigate} from '@reach/router';
import axios from 'axios';
const Create = () => {
    const [formInfo, setFormInfo]= useState({
        name:"",
        type:"",
        description:"",
        skill1:"",
        skill2:"",
        skill3:""
    })

    const [errors, setErrors] = useState({})

    const changeHandler = (e) => {
        console.log("Changing")
        console.log(e.target)
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
    }

    
    const submitHandler = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/exam/create", formInfo)
            .then(response => {
                console.log("SUCCESS: response from post request form submission", response)
                if(response.data.errors){
                    console.log("ERROS FOUND!")
                    setErrors(response.data.errors)
                }
                else{
                    navigate("/")
                    // setErrors(response.data.errors)
                }
            })
            .catch(err => console.log(err))
    } 
    return(
        <div>
        <h3>Add A New Pet Profile</h3>
            <div className="card">
                    <form onSubmit={submitHandler} className="col-6 mx=auto">
                        <div className="form-group">
                        <label name="name">Name:<input type="text" name="name" onChange={changeHandler}/></label>
                        <p>{errors.name? errors.name.message: ""}</p>
                        <label name="type">Type:<input type="text" name="type" onChange={changeHandler}/></label>
                        <p>{errors.name? errors.type.message: ""}</p>
                        <label name="description">Description:<input type="text" name="description" onChange={changeHandler}/></label>
                        <p>{errors.name? errors.description.message: ""}</p>
                        <label name="skill1">Skill 1:<input type="text" name="skill1" onChange={changeHandler}/></label>
                        <label name="skill2">Skill 2:<input type="text" name="skill2" onChange={changeHandler}/></label>
                        <label name="skill3">Skill 3:<input type="text" name="skill3" onChange={changeHandler}/></label>
                        <input type="submit" value="Create Pet" className="btn btn-success"/>
                        </div>
                    </form>
            </div>
        </div>
    )
}

export default Create