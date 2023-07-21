import React, { useState } from "react";
import "./App.css";

function App() {
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

  const handleTrigonometry = (func) => {
    try {
      const radianValue = eval(input);
      const trigValue = Math[func](radianValue);
      setResult(trigValue.toString());
    } catch (error) {
      setResult("Error");
    }
  };

  const handleAddParenthesis = (parenthesis) => {
    setInput(input + parenthesis);
  };

  const handleLog = () => {
    try {
      const logValue = Math.log10(eval(input));
      setResult(logValue.toString());
    } catch (error) {
      setResult("Error");
    }
  };

  const handleLn = () => {
    try {
      const lnValue = Math.log(eval(input));
      setResult(lnValue.toString());
    } catch (error) {
      setResult("Error");
    }
  };

  const handleDegToRad = () => {
    try {
      const degreeValue = eval(input);
      const radianValue = (degreeValue * Math.PI) / 180;
      setResult(radianValue.toString());
    } catch (error) {
      setResult("Error");
    }
  };

  const handlePower = () => {
    setInput(input + "^");
  };

  const handleSquareRoot = () => {
    try {
      const sqrtValue = Math.sqrt(eval(input));
      setResult(sqrtValue.toString());
    } catch (error) {
      setResult("Error");
    }
  };

  const handleExponent = () => {
    setInput(input + "EXP");
  };

  const handlePercentage = () => {
    try {
      const percentageValue = (eval(input) / 100).toString();
      setResult(percentageValue);
    } catch (error) {
      setResult("Error");
    }
  };

  const handleFactorial = () => {
    try {
      const number = eval(input);
      if (number < 0) {
        setResult("Error");
      } else {
        let factorialValue = 1;
        for (let i = 2; i <= number; i++) {
          factorialValue *= i;
        }
        setResult(factorialValue.toString());
      }
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          <input type="text" value={input} readOnly />
          <div className="result">{result}</div>
        </div>
        <div className="buttons">
        <button className="opbutton" onClick={handleDegToRad}>Deg</button>
  <button className="opbutton" onClick={handleFactorial}>x!</button>
  <button className="opbutton" onClick={() => handleAddParenthesis("(")}>(</button>
  <button className="opbutton" onClick={() => handleAddParenthesis(")")}>)</button>
  <button className="opbutton" onClick={handlePercentage}>%</button>
  <button className="clear" onClick={handleClear}>AC</button>
  <button className="opbutton"onClick={() => handleTrigonometry("sin")}>sin</button>
  <button className="opbutton"onClick={handleLn}>ln</button>
  <button onClick={() => handleClick("7")}>7</button>
  <button onClick={() => handleClick("8")}>8</button>
  <button onClick={() => handleClick("9")}>9</button>
  <button className="opbutton" onClick={() => handleClick("/")}>/</button>
  <button className="opbutton" onClick={() => handleTrigonometry("cos")}>cos</button>
  <button className="opbutton" onClick={handleLog}>log</button>
  <button onClick={() => handleClick("4")}>4</button>
  <button onClick={() => handleClick("5")}>5</button>
  <button onClick={() => handleClick("6")}>6</button>
  <button className="opbutton" onClick={() => handleClick("*")}>*</button>
  <button className="opbutton" onClick={() => handleTrigonometry("tan")}>tan</button>
  <button className="opbutton" onClick={handleSquareRoot}>sqr()</button>
  <button onClick={() => handleClick("1")}>1</button>
  <button onClick={() => handleClick("2")}>2</button>
  <button onClick={() => handleClick("3")}>3</button>
  <button className="opbutton" onClick={() => handleClick("-")}>-</button>
  <button className="opbutton" onClick={handleExponent}>EXP</button>
  <button className="opbutton" onClick={handlePower}>x^</button>
  <button onClick={() => handleClick("0")}>0</button>
  <button className="opbutton" onClick={() => handleClick(".")}>.</button>
  <button className="equal" onClick={handleCalculate}>=</button>
  <button className="opbutton" onClick={() => handleClick("+")}>+</button>
        </div>
      </div>
    </div>
  );
}

export default App;
