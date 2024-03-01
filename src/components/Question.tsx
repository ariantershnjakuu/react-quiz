import Option from "./Option";

interface QuestionProps {
  question: any;
  dispatch: any;
  answer: any;
}

const Question: React.FC<QuestionProps> = ({ question, dispatch, answer }) => {
  return (
    <div>
      <h4>{question.question}</h4>
      <Option question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
};

export default Question;
