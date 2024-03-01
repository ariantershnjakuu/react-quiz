interface OptionProps {
  question: any;
  dispatch: any;
  answer: any;
}

const Option: React.FC<OptionProps> = ({ question, dispatch, answer }) => {
  const hasAnswered = answer !== null;
  return (
    <div className="options">
      {question.options.map((option: any, index: any) => (
        <button
          className={`btn btn-option ${index === answer ? "answer" : ""} 
          ${
            hasAnswered
              ? index === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          key={option}
          disabled={hasAnswered}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Option;
