import React, { useEffect, useReducer } from "react";
import DateCounter from "./DateCounter";
import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Errors from "./Error";
import StartScreen from "./StartScreen";

const initialState = {
  questions: [],
  status: "loading",
};
const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "dataReceived":
      return { ...state, question: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    default:
      throw new Error("Invalid action");
  }
};
function App() {
  const [{ question, status }, dispatch] = useReducer(reducer, initialState);

  const numQuestions = question?.length;
  useEffect(() => {
    fetch("http://localhost:3001/questions").then((response) => {
      response
        .json()
        .then((data) => {
          dispatch({ type: "dataReceived", payload: data });
        })
        .catch((error) => {
          dispatch({ type: "dataFailed" });
        });
    });
  }, []);
  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Errors />}
        {status === "ready" && <StartScreen numQuestions={numQuestions} />}
      </Main>
    </div>
  );
}

export default App;
