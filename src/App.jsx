import React, { useState } from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState("");
  const inClick = (e) => {
    if (e.target.name) setResult(result.concat(e.target.name));
  };
  const clear = () => {
    setResult("");
  };
  const backSpace = () => {
    setResult(result.slice(0, -1));
  };

  const calculateMulty = (numberString) => {
    if (isNaN(+numberString)) {
      const numbers = numberString.split(/\*|\//);
      const symbols = ["*"];
      result.split("").forEach((item) => {
        if (item === "/" || item === "*") {
          symbols.push(item);
        }
      });

      let current = 1;

      numbers.forEach(function (nStr, i) {
        if (symbols[i] === "*") {
          current *= +nStr;
        } else {
          current /= +nStr;
        }
      });

      return current;
    }
    return +numberString;
  };

  const calculate = () => {
    let str = (result[0] === "-" ? "0" : "") + result;
    const numbers = str.split(/\+|\-/);

    const calcNumbers = numbers.map(function (item) {
      return item;
    });

    const symbols = ["+"]; // + , -
    result.split("").forEach((item) => {
      if (item === "+" || item === "-") {
        symbols.push(item);
      }
    });

    let currentResult = 0;
    calcNumbers.forEach(function (nStr, i) {
      if (symbols[i] === "+") {
        currentResult += calculateMulty(nStr);
      } else {
        currentResult -= calculateMulty(nStr);
      }
    });
    console.log(symbols);

    setResult(currentResult);

    // for (let i = 0; i < calcNumbers.length; i++) {
    //   if (arrSymbols[i - 1] === "+" || i === 0) {
    //     if (arrSymbols[i] === "*" || arrSymbols[i] === "/") {
    //       total += calcNumbers[i];
    //     } else {
    //       total += calcNumbers[i];
    //     }
    //   } else if (arrSymbols[i - 1] === "-" || i === 0) {
    //     total -= calcNumbers[i];
    //   } else if (arrSymbols[i - 1] === "*" || i === 0) {
    //     total2 = calcNumbers[i] * calcNumbers[i - 1];
    //   }
    // }
    // let total3 = total + total2;

    // console.log(total);
    // console.log(total2);
    // console.log(total3);
    // setResult(total3.toString());
  };

  return (
    <div className="App">
      <form
        onSubmit={(evt) => {
          evt.preventDefault();
        }}
      >
        <input
          type="text"
          onChange={(evt) => {
            setResult(evt.target.value);
          }}
          value={result}
        />
        <div className="keypad">
          <button type="button" onClick={clear} id="clear">
            Clear
          </button>
          <button type="button" onClick={backSpace}>
            C
          </button>
          <button type="button" name="/" onClick={inClick}>
            /
          </button>
          <button type="button" name="7" onClick={inClick}>
            7
          </button>
          <button type="button" name="8" onClick={inClick}>
            8
          </button>
          <button type="button" name="9" onClick={inClick}>
            9
          </button>
          <button type="button" name="*" onClick={inClick}>
            *
          </button>
          <button type="button" name="4" onClick={inClick}>
            4
          </button>
          <button type="button" name="5" onClick={inClick}>
            5
          </button>
          <button type="button" name="6" onClick={inClick}>
            6
          </button>
          <button type="button" name="+" onClick={inClick}>
            +
          </button>
          <button type="button" name="1" onClick={inClick}>
            1
          </button>
          <button type="button" name="2" onClick={inClick}>
            2
          </button>
          <button type="button" name="3" onClick={inClick}>
            3
          </button>
          <button type="button" name="-" onClick={inClick}>
            -
          </button>
          <button type="button" name="0" onClick={inClick}>
            0
          </button>
          <button type="button" name="." onClick={inClick}>
            .
          </button>
          <button type="submit" name="=" id="result" onClick={calculate}>
            =
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
