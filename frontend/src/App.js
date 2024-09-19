import logo from './logo.svg';
import './App.css';
import { useState } from "react"


function App() {
  const [frogImg, setFrogImg] = useState("https://media.istockphoto.com/id/1385404682/vector/frog-kawaii.jpg?s=612x612&w=0&k=20&c=A2CQHQhIrNQqTPz-zdqoBmsJhHzjKs9ElYMESQTvBrE=");
  async function getFrog() {
    const res = await fetch("http://localhost:8080/frogs", {
      method: "GET",
    })
    const resJSON = await res.json();
    setFrogImg(resJSON["img"]);
  }
  return (
    <div className="frogCentral">
      <h1 className="frogHeader">Welcome to Frog Central!</h1>
      <button className="frogButton" onClick={ getFrog }>Fetch Random Frog</button>
      <br /><br />
      <img alt="frog" width="200px" src={ frogImg }></img>
    </div>
  );
}

export default App;

// react default code
// <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>