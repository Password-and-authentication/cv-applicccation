import "./styles.css";
import General from "./components/General";
import Education from "./components/Education";
import Experience from "./components/Experience";
import React from "react";
import img from "./pencil.svg"
import img2 from "./check-bold.svg"

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {isClicked: false, text: "WWWWW"}

    this.edit = this.edit.bind(this)
    
  }

  edit() {
    this.setState({
      isClicked: !this.state.isClicked
    })
  }

  

  render() {
    const isClicked = this.state.isClicked
    let el;
    if (isClicked === true) {
      el = <img src={img2} onClick={this.edit} className="edit"></img>
    } else {
      el = <img src={img} onClick={this.edit} className="edit"></img>
    }
    return(
      <div className="App">

       {el}
        
      <General isClicked={this.state.isClicked} />
     
      <Education isClicked={this.state.isClicked}/>
      <Experience edit={this.edit} isClicked={this.state.isClicked}/>
    </div>
    )
  }
}



export default App;
