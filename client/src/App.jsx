import { useState } from "react";
import "./App.css";

function App() {
  const [joke, setJoke] = useState("Click the button to get a joke!");

  const fetchJoke = async () => {
    const response = await fetch("https://icanhazdadjoke.com/", {
      headers: { Accept: "application/json" },
    });
    const data = await response.json();
    setJoke(data.joke);
  };

  return (
    <div className="container">
      <h1>😂 Dad Joke Generator</h1>
      <p className="joke">{joke}</p>
      <button onClick={fetchJoke}>Get a Joke</button>
    </div>
  );
}

export default App;
