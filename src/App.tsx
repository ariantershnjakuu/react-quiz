import React, { useEffect } from "react";
import DateCounter from "./DateCounter";
import Header from "./Header";
import Main from "./Main";

function App() {
  useEffect(() => {
    fetch("http://localhost:3001/questions").then((response) => {
      response
        .json()
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error(error);
        });
    });
  }, []);
  return (
    <div className="app">
      <Header />
      <Main>
        <p>123</p>
        <p>Question!</p>
      </Main>
    </div>
  );
}

export default App;
