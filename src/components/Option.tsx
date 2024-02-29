interface OptionProps {
  question: any;
}

const Option: React.FC<OptionProps> = ({ question }) => {
  return (
    <div className="options">
      {question.options.map((option: any) => (
        <div className="btn btn-option">
          <span>{option}</span>
        </div>
      ))}
    </div>
  );
};

export default Option;
