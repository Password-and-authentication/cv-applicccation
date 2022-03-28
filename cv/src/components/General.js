import React, { useState } from "react";
import { edit } from "../App";

function General(isClicked) {
    const [name, setName] = useState("Eero Pomell")
    const [address, setAddress] = useState("Takojantie 1B")
    const [phone, setPhone] = useState("0458909489")
    const [email, setEmail] = useState("Eeropomell1@gmail.com")
   

    let el;
    if (isClicked.isClicked === true) {
        el = <form  className="top">
        <input className="header" id="Name" onChange={(e) => setName(e.target.value)} defaultValue={name}></input>

        <div className="details">
            <input id="Address" onChange={(e) => setAddress(e.target.value)} defaultValue={address}></input>
            <input id="Phone" defaultValue={phone} onChange={(e) => setPhone(e.target.value)}></input>
            <input id="Email" defaultValue={email} onChange={(e) => setEmail(e.target.value)}></input>
        </div>
        </form>
    } else {
        el = <div className="top">
                <h1 className="header" >{name}</h1>
                <div className="details">
                <h3 id="address" className="detail">{address}</h3>
                <h3 id="phone" className="detail">{phone}</h3>
                <h3 id="email" className="detail">{email}</h3>
                </div>
               
                </div>
    }

    return(
        <div className="General">
            {el}
        </div>
    )

}


export default General;