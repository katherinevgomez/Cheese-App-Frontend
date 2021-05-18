import React from 'react'
import {useState} from "react"

function Show(props) {
    //grab the id from the url
    const id = props.match.params.id
    //put the people array in its variable
    const cheeses = props.cheese
    //find the individual cheese in cheeses
    const cheese = cheeses.find((c)=>{
       return c._id === id
    })
    //state for form
    const [editForm, setEditForm] = useState(cheese)

    //handleChange function for form
    const handleChange = (event) => {
        setEditForm({...editForm, [event.target.name]: event.target.value})
    }
    //handle for when form is submitted
    const handleSubmit = (event) => {
        event.preventDefault()
        //update the cheese
        props.updateCheese(editForm, cheese._id)
        //redirect cheese back to index
        props.history.push("/")
    }
    const removeCheese = () => {
        props.deleteCheese(cheese._id)
        props.history.push("/")
    }
    return (
        <div className="cheese">
            <h1>{cheese.name}</h1>
            <h2>{cheese.countryOfOrigin}</h2>
            <img src={cheese.image} alt={cheese.name} />
            <button id="delete" onClick = {removeCheese}>DELETE</button>
           
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                value={editForm.name}
                name="Name"
                placeholder="Name"
                onChange={handleChange}
                />
                <input
                type="text"
                value={editForm.image}
                name="image"
                placeholder="Image URL"
                onChange={handleChange}
                />
            <input
                type="text"
                value={editForm.countryOfOrigin}
                name="countryOfOrigin"
                placeholder="Country of Origin"
                onChange={handleChange}
                />
                <input type="submit" value="Update Cheese"/>
            </form>
            
        </div>
    )
}

export default Show
