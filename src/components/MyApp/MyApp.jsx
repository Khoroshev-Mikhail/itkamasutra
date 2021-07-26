import React from 'react'
import API from '../../API/wordAPI'
import * as axios from 'axios'

const MyApp = (props) => {
    let Ara=()=>{
        axios.get('C:/Users/User/Desktop/REACT/API').then(response => {
            console.log('ara')
        })
    }
    return (
        <div>
            <h1>{props.words[1].kiss}</h1>
            <h2>{Ara()}</h2>
        </div>
    )
}

export default MyApp;