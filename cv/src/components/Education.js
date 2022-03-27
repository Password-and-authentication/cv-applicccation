import React from "react";


class Education extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            school: "Tapiolan lukio",
            title: "High school",
            date: "2017 - 2020"
        }

        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(e) {
        console.log(e.target.id)
        this.setState({
            [`${e.target.id}`]: e.target.value
        })
    }

    render() {
        const isClicked = this.props.isClicked
        let schoolEl;
        let titleEl;
        let dateEl;
        if (isClicked === true) {
            schoolEl = <input id="school" defaultValue={this.state.school} onChange={this.handleChange}></input>
            titleEl = <input id="title" defaultValue={this.state.title} onChange={this.handleChange}></input>
            dateEl = <input id="date" defaultValue={this.state.date} onChange={this.handleChange}></input>
            
        } else {
            schoolEl = <span>{this.state.school}</span>
            titleEl = <span>{this.state.title}</span>
            dateEl = <span>{this.state.date}</span>
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
}

export default Education;
