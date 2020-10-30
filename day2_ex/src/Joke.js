import { useState, useEffect } from "react";

function Joke(props) {
  const chuckUrl = "https://api.chucknorris.io/jokes/random";
  const dadUrl = " https://icanhazdadjoke.com/";

  const [chuckJoke, setchuckJoke] = useState("Joke");
  const [dadJoke, setdadJoke] = useState(getDadJoke);

  useEffect(() => {
    const interval = setInterval(() => {
      getDadJoke();
    }, 10000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <button
        className="btn btn-default btn-outline-dark"
        onClick={getChuckJoke}
      >
        Get joke
      </button>
      <p>{chuckJoke}</p>
      <p>Random joke:</p>
      <p>{dadJoke}</p>
    </div>
  );

  function getChuckJoke() {
    fetch(chuckUrl, { headers: { Accept: "application/json" } })
      .then((res) => res.json())
      .then((data) => {
        setchuckJoke(data.value);
      });
  }
  function getDadJoke() {
    fetch(dadUrl, { headers: { Accept: "application/json" } })
      .then((res) => res.json())
      .then((data) => {
        setdadJoke(data.joke);
      });
  }
}

export default Joke;
