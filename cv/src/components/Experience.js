import React from "react";


class Experience extends React.Component {
    constructor(props) {
        super(props)


        this.state = {
            company: "Lifeline Ventures",
            position: "Assistant",
            tasks: "Learn venture capitalism",
            date: "2022?"
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.setState({
            [`${e.target.id}`]: e.target.value
        })
    }

    render() {
        const isClicked = this.props.isClicked
        let companyEl;
        let positionEl;
        let tasksEl;
        let dateEl;
        if (isClicked) {
            companyEl = <input id="company" defaultValue={this.state.company} onChange={this.handleChange}></input>
            positionEl = <input id="position" defaultValue={this.state.position} onChange={this.handleChange}></input>
            tasksEl = <input id="tasks" defaultValue={this.state.tasks} onChange={this.handleChange}></input>
            dateEl = <input id="date" defaultValue={this.state.date} onChange={this.handleChange}></input>
            
        } else {
            companyEl = <span>{this.state.company}</span>
            positionEl = <span>{this.state.position}</span>
            tasksEl = <span>{this.state.tasks}</span>
            dateEl = <span>{this.state.date}</span>
            
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
}

export default Experience;
