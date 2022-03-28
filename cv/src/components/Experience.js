import React, {useState, useEffect} from "react";


function Experience(isClicked) {

    const [company, setCompany] = useState("Lifeline ventures")
    const [position, setPosition] = useState("Assistant")
    const [tasks, setTasks] = useState("Learn venture capitalism")
    const [date, setDate] = useState("2022?")
    

    let companyEl;
    let positionEl;
    let tasksEl;
    let dateEl;
    if (isClicked) {

        companyEl = <input id="company" defaultValue={company} onChange={(e) => setCompany(e.target.value)}></input>
        positionEl = <input id="position" defaultValue={position} onChange={(e) => setPosition(e.target.value)}></input>
        tasksEl = <input id="tasks" defaultValue={tasks} onChange={(e) => setTasks(e.target.value)}></input>
        dateEl = <input id="date" defaultValue={date} onChange={(e) => setDate(e.target.value)}></input>

    } else {
        companyEl = <span>{company}</span>
        positionEl = <span>{position}</span>
        tasksEl = <span>{tasks}</span>
        dateEl = <span>{date}</span>
        
    }

    return(
        <div className="Experience">
                <h2>Experience</h2>
                <h3 className="titles">Company: {companyEl}</h3>
                <h3 className="titles">Position title: {positionEl}</h3>
                <h3 className="titles">Main tasks of job: {tasksEl}</h3>
                <h3 className="titles">Date of Internship: {dateEl}</h3>
            </div>
    )


}

export default Experience;
