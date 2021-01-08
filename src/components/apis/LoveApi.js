import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../style/Love.css";

function LoveApi() {
  const [fname, setFname] = useState("");
  const [sname, setSname] = useState("");
  const [result, setResult] = useState(false);


  const options = {
    method: "GET",
    url: "https://love-calculator.p.rapidapi.com/getPercentage",
    params: { fname: `${fname}`, sname: `${sname}` },
    headers: {
      "x-rapidapi-key": "9e8ddf2821msh4c4f74e49206ee9p1302d4jsn143cd2ada6f1",
      "x-rapidapi-host": "love-calculator.p.rapidapi.com",
    },
  };

  const resultFunc = () => {
    axios.request(options).then(function (response) {
      setResult(response.data);
    });
  };
  /* useEffect(() => {
axios.request(options).then(function (response) {
  console.log(response.data);
  setResult(response.data)
}).catch(function (error) {
  console.error(error);
});
}, []) */

  const onTextChangeSname = (e) => {
    setSname(e.target.value);
  };
  const onTextChangeFname = (e) => {
    setFname(e.target.value);
  };

  return (
    <div>
      <div id="love">
        {/*      <h1>Find your LOVE!</h1> */}
        <div className="name-inputs-con">
          <div className="my-name">
            <label>My Name: </label>
            <input type="text" onChange={onTextChangeFname} />
          </div>
          <div className="lover-name">
            <label>My Match: </label>
            <input type="text" onChange={onTextChangeSname} />
          </div>
        </div>

        <h1 className="love-names">{fname + " <3 " + sname}</h1>

        <div className="love-result-con">
          <div onClick={resultFunc} id="try-my-luck">
            <button className="my-luck-btn">Try My Luck!</button>
            <i class="fas fa-hand-holding-heart"></i>
          </div>

          <div className="love-result">
            {result.percentage ? result.percentage + "% matching" : " "}
          </div>
          <div className="love-result">{result.result}</div>
        </div>
      </div>
    </div>
  );
}

export default LoveApi;
