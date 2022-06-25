import axios from "axios";
import React, { useEffect, useState } from "react";
import Data from "./Data";
import Search from "./Search";
import "./styles.css";
const App = () => {
  const [input, setInput] = useState();
  const URL =
    "https://script.googleusercontent.com/macros/echo?user_content_key=VI8Tc4hCmb5e8jOp6VOiyKdPt67KB10xdMrKldMynW9ngcofg16Ed120vLeDYBDYINXb3FuetUR3n8uDaXJg30XUG0ErbXQMm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnNTueq3QW3VfMeLJdgnqq-pQFY8m9vbepN45ya1iGHu9tNtQ5elVv3bjcIsP6tBupIHzsg1HGByVOwr7uQ9GylvSmjyeGP9fZQ&lib=M3Pdhw0w7IAyKxHEP3E73Vx2TY0KEY2cc";

  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get(URL)
      .then((res) => {
        setData(res.data[0].jsonArray);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const changehandler = (e) => {
    e.preventDefault();
    setInput(e.currentTarget.value);
  };
  return (
    <>
      <div className="header">
        <h1>PPM PLAN 2022</h1>
      </div>
      <div>
        <Search changehandler={changehandler} />
        <Data inputS={input} />
        <h1>{input}</h1>
      </div>
    </>
  );
};

export default App;
