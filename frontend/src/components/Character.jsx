import { useState } from "react"

export const Character = ({ temperature }) => {
    return (
        <div style={{display: "inline-block"}}>
            <img hidden={!(temperature > 15 && temperature < 30)} style={{width: "400px"}} src={`${process.env.PUBLIC_URL}/comfort.gif`}></img>
            <img hidden={!(temperature >= 30)}  style={{width: "400px"}} src={`${process.env.PUBLIC_URL}/hot.gif`}></img>
            <img hidden={!(temperature > 0 && temperature <= 15)} style={{width: "400px"}} src={`${process.env.PUBLIC_URL}/cold.gif`}></img>
            <img hidden={!(temperature <= 0)} style={{width: "400px"}} src={`${process.env.PUBLIC_URL}/2cold.jpeg`}></img>
        </div>
    )
}