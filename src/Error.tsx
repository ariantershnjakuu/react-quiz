interface ErrorProps {}

const Error: React.FC<ErrorProps> = () => {
  return (
    <p className="error">
      <span>💥</span> There was an error fecthing questions.
    </p>
  );
};

export default Error;
