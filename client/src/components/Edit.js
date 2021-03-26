import React, { useEffect, useState } from 'react';
import {Router, Link, navigate} from '@reach/router';

import axios from 'axios';

const Edit = (props) => {
    const [formInfo, setFormInfo]= useState({
        name:"",
        type:"",
        description:"",
        skill1:"",
        skill2:"",
        skill3:""
    })

    useEffect(() => {
        axios.get(`http:////localhost:8000/api/exam/${props.specificid}`)
        .then(response => {
            console.log("SUCCESS: UPDATER Got specific info for forms")
            setFormInfo(response.data.results)
        })
        .catch(err => console.log("ERROR WITH UPDATE", err))
    }, [props.specificid])

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
        axios.put(`http://localhost:8000/api/exam/update/${props.specificid}`, formInfo)
            .then(response => {
                console.log("SUCCESS: Edit axios put request sent")
                navigate('/')
            })
            .catch(err => console.log("Error on making put request", err))

    } 
    return(
        <div>
        <h3>Add A New Pet Profile</h3>
            <div className="card">
                    <form onSubmit={submitHandler} className="col-6 mx=auto">
                        <div className="form-group">
                        <label name="name">Name:<input type="text" name="name" onChange={changeHandler} value={formInfo.name}/></label>
                        <p>{errors.name? errors.name.message: ""}</p>
                        <label name="type">Type:<input type="text" name="type" onChange={changeHandler} value={formInfo.type}/></label>
                        <p>{errors.name? errors.type.message: ""}</p>
                        <label name="description">Description:<input type="text" name="description" onChange={changeHandler} value={formInfo.description}/></label>
                        <p>{errors.name? errors.description.message: ""}</p>
                        <label name="skill1">Skill 1:<input type="text" name="skill1" onChange={changeHandler} value={formInfo.skill1}/></label>
                        <label name="skill2">Skill 2:<input type="text" name="skill2" onChange={changeHandler} value={formInfo.skill2}/></label>
                        <label name="skill3">Skill 3:<input type="text" name="skill3" onChange={changeHandler} value={formInfo.skill3}/></label>
                        <input type="submit" value="Edit Submit" className="btn btn-success"/>
                        </div>
                    </form>
            </div>
        </div>
    )
}

export default Edit