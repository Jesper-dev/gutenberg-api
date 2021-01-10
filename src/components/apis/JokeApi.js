import React, { useState, useEffect } from "react";
/* import JokeAPI from "sv443-joke-api"; */
import axios from "axios";
import "../../style/Joke.css";

const JokeApiFunc = () => {
  const [setup, setSetup] = useState("");
  const [delivery, setDelivery] = useState("");
  const [single, setSingle] = useState("");
  const [category, setCategory] = useState("Programming");
  const [sendRequest, setSendRequest] = useState(false);

  useEffect(() => {
    axios({
      method: "GET",
      url: `https://v2.jokeapi.dev/joke/${category}/Any?format=xml&lacklistFlags=political,lang=en,type=single,contains=C%23,idRange=0-55]`,
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "jokeapi.p.rapidapi.com",
        "x-rapidapi-key": "2d47072c52msh10f80a8852d7f6dp15aa0djsn8df70b654886",
        useQueryString: true,
      },
      params: {
        format: "json",
      },
    })
      .then((response) => {
        if (sendRequest) {
          //send the request
          setSendRequest(false);
        }

        setSingle("");
        setDelivery("");
        setSetup("");

        if (response.data.type === "single") {
          setSingle(response.data.joke);
        } else {
          setSetup(response.data.setup);
          setDelivery(response.data.delivery);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [category, sendRequest]);

  const onCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <>
      <div className="joke-container">
        <h1 id="have-a-laugh">Have A Laugh</h1>
        <div>{setup}</div>
        <div>{delivery}</div>
        <div>{single}</div>
        <button disabled={sendRequest} onClick={() => setSendRequest(true)}>
          RANDOM JOKE
        </button>
        <form>
          <label htmlFor="category">Choose a category</label>
          <select onChange={onCategoryChange} id="category" name="category">
            <option value="Programming">Programming</option>
            <option value="Dark">Dark</option>
            <option value="Pun">Pun</option>
          </select>
        </form>
      </div>
    </>
  );
};

export default JokeApiFunc;
