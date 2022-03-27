import React from "react";
import { edit } from "../App";

class General extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "Eero Pomell",
            address: "Takojantie 1B",
            phone: "0458909489",
            email: "Eeropomell1@gmail.com",
            isClicked: this.props.isClicked
        }

        this.handleChange = this.handleChange.bind(this)
        
    }

    handleChange(e) {
    
        this.setState({
            [`${e.target.id}`]: e.target.value
        })
    }

    render() {
        const isClicked = this.props.isClicked;
        let el;
        if (isClicked) {

            el = 

                <form  className="top">
                <input className="header" id="name" onChange={this.handleChange} defaultValue={this.state.name}></input>

                <div className="details">
                    <input id="address" onChange={this.handleChange} defaultValue={this.state.address}></input>
                    <input id="phone" defaultValue={this.state.phone} onChange={this.handleChange}></input>
                    <input id="email" defaultValue={this.state.email} onChange={this.handleChange}></input>
                </div>
            </form>
            
            
        } else {
            el = <div className="top">
                <h1 className="header" >{this.state.name}</h1>
                <div className="details">
                <h3 id="address" className="detail">{this.state.address}</h3>
                <h3 id="phone" className="detail">{this.state.phone}</h3>
                <h3 id="email" className="detail">{this.state.email}</h3>
                </div>
               
                </div>
           
        }
        
        
        return(
            <div className="General">
         
                {el}

            </div>
        )
    }
}

export default General;