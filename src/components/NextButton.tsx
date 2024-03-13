import React from "react";

interface NextButtonProps {
  dispatch: any;
  answer: any;
  index: number;
  numQuestions: number;
}

const NextButton: React.FC<NextButtonProps> = ({
  dispatch,
  answer,
  index,
  numQuestions,
}) => {
  if (answer === null) return null;

  if (index < numQuestions - 1) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );
  }

  if (index === numQuestions - 1) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finish" })}
      >
        Finish
      </button>
    );
  }

  return null;
};

export default NextButton;
