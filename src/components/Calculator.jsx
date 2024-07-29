import React, { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  const handleCalculate = () => {
    try {
      setResult(eval(input).toString());
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-80">
        <div className="mb-4">
          <h1>Calculator</h1>
          <input
            type="text"
            value={input}
            className="w-full p-2 mb-2 border rounded"
            readOnly
          />
          <input
            type="text"
            value={result}
            className="w-full p-2 mb-2 border rounded"
            readOnly
          />
        </div>
        <div className="grid grid-cols-4 gap-2">
          {["1", "2", "3", "+"].map((item) => (
            <button
              key={item}
              onClick={() => handleClick(item)}
              className="p-4 bg-gray-200 rounded"
            >
              {item}
            </button>
          ))}
          {["4", "5", "6", "-"].map((item) => (
            <button
              key={item}
              onClick={() => handleClick(item)}
              className="p-4 bg-gray-200 rounded"
            >
              {item}
            </button>
          ))}
          {["7", "8", "9", "*"].map((item) => (
            <button
              key={item}
              onClick={() => handleClick(item)}
              className="p-4 bg-gray-200 rounded"
            >
              {item}
            </button>
          ))}
          {["C", "0", "=", "/"].map((item) => (
            <button
              key={item}
              onClick={() =>
                item === "C"
                  ? handleClear()
                  : item === "="
                  ? handleCalculate()
                  : handleClick(item)
              }
              className="p-4 bg-gray-200 rounded"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
