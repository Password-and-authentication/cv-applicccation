import "./styles.css";
import General from "./components/General";
import Education from "./components/Education";
import Experience from "./components/Experience";
import React, {useEffect, useState} from "react";
import img from "./pencil.svg"
import img2 from "./check-bold.svg"


export function Appster() {
  const [isClicked, setIsClicked] = useState(false)

  useEffect(() => {
   
  })

  let el;
  if (isClicked) {
    el = <div>is clicked is true</div>
  } else {
    el = <div>its false</div>
  }

  return (
    <div>
      <button onClick={() => setIsClicked(!isClicked)}>edit</button>
      {el}
      
    </div>
  )
}

function App() {

  const [isClicked, setIsClicked] = useState(false)

  let el;
  if (isClicked) {

    el = <img src={img2} onClick={() => setIsClicked(!isClicked)} className="edit"></img>
  } else {
    el = <img src={img} onClick={() => setIsClicked(!isClicked)} className="edit"></img>
  }

  return(
    <div className="App">

      {el}
      <General isClicked={isClicked} />
      <Education isClicked={isClicked} />
      <Experience isClicked={isClicked} />

    </div>
  )
 
}



export default App;
