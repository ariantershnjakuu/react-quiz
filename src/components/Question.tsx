import Option from "./Option";

interface QuestionProps {
  question: any;
}

const Question: React.FC<QuestionProps> = ({ question }) => {
  return (
    <div>
      <h4>{question.question}</h4>
      <Option question={question} />
    </div>
  );
};

export default Question;
