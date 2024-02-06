interface LoaderProps {}

const Loader: React.FC<LoaderProps> = () => {
  return (
    <div className="loader-container">
      <div className="loader"></div>
      <p>Loading questions...</p>
    </div>
  );
};

export default Loader;
