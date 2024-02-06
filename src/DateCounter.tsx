import React, { useState } from "react";

const DateCounter: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [step, setStep] = useState<number>(1);

  // This mutates the date object.
  const date = new Date("June 21 2027");
  date.setDate(date.getDate() + count);

  const dec = (): void => {
    setCount((prevCount) => prevCount - step);
  };

  const inc = (): void => {
    setCount((prevCount) => prevCount + step);
  };

  const defineCount = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setCount(Number(e.target.value));
  };

  const defineStep = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setStep(Number(e.target.value));
  };

  const reset = (): void => {
    setCount(0);
    setStep(1);
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default DateCounter;
