import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Errors from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";

const initialState = {
  questions: [],
  status: "loading",
  index: 0,
};
const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "dataReceived":
      return { ...state, question: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    case "start":
      return { ...state, status: "active" };
    default:
      throw new Error("Invalid action");
  }
};
function App() {
  const [{ question, status, index }, dispatch] = useReducer(
    reducer,
    initialState
  );

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
        {status === "ready" && (
          <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
        )}
        {status === "active" && <Question question={question[index]} />}
      </Main>
    </div>
  );
}

export default App;
