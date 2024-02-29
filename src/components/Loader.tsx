interface LoaderProps {}

const Loader: React.FC<LoaderProps> = () => {
  return (
    <div className="loader-container">
      <div className="loader"></div>
    </div>
  );
};

export default Loader;
