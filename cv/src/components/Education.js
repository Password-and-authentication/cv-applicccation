import React, { useState } from "react";


function Education(isClicked) {

    const [school, setSchool] = useState("Tapiolan yläkoulu")
    const [title, setTitle] = useState("High school")
    const [date, setDate] = useState("2017 -2020")
    
    let schoolEl;
    let titleEl;
    let dateEl;
    if (isClicked) {
        schoolEl = <input id="school" defaultValue={school} onChange={(e) => setTitle(e.target.value)}></input>
        titleEl = <input id="title" defaultValue={title} onChange={(e) => setTitle(e.target.value)}></input>
        dateEl = <input id="date" defaultValue={date} onChange={(e) => setDate(e.target.value)}></input>
    } else {
        schoolEl = <span>{school}</span>
        titleEl = <span>{title}</span>
        dateEl = <span>{date}</span>
    }

    return(
        <div className="Education">

                <h2>Education</h2>
                <h3 className="titles">School: {schoolEl} </h3>
                <h3 className="titles">Title of Study: {titleEl} </h3>
                <h3 className="titles">Date of Study: {dateEl}</h3>

            </div>
    )
    
}

export default Education;
