import { useState } from "react";
import "./App.css";
import JokeCard from "./components/JokeCard"; // Import the new component

function App() {
  const [joke, setJoke] = useState({
    setup: "Click the button to get a joke!",
    punchline: "",
  });

  const fetchJoke = async () => {
    const response = await fetch("https://icanhazdadjoke.com/", {
      headers: { Accept: "application/json" },
    });
    const data = await response.json();
    setJoke({ setup: data.joke, punchline: "" }); // No separate punchline for this API
  };

  return (
    <div className="container">
      <h1>😂 Dad Joke Generator</h1>
      <JokeCard joke={joke.setup} punchline={joke.punchline} /> {/* Render the JokeCard */}
      <button onClick={fetchJoke}>Get a Joke</button>
    </div>
  );
}

export default App;
  