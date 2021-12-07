
import React from 'react'
import {useState, useEffect} from 'react'
import  axios from 'axios'

export default function Data() {
    const [value, setValue] = useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/photos").then((response) => {
            setValue(response.data) 
           
        })
        
    }) 

     let userPhotos=value.map((item, index) => (
        <img src={item.thumbnailUrl}/>
    )) 
    return (
        <div>
            {userPhotos}
        </div>
    )
}
