import React, { Component, useState } from "react";

const Calculator = () => {
  const [input, setinput] = useState("");
  const [reset, setreset] = useState("");

  const addvalues = (value) => {
    setinput(input + value);
  };

  const equal = () => {
    setinput(eval(input));
  };

  const clear = () => {
    if (input.length < 0) {
      return;
    } else {
      setreset([...reset, input]);
      setinput("");
    }
  };

  
    const del =() =>{
        setinput(input.slice(0,-1))
    }

  return (
    <div>
      <table border="1">
        <tr>
          <td colSpan="4">
            <input type="text" name="input" id="answer" value={input}></input>
          </td>
        </tr>

        <tr>
          <td>
            <input type="button" name="." value="." onClick={() => addvalues(".")} />
          </td>
          <td>
            <input type="button" name="C" onClick={clear} value="C" />
          </td>
          <td>
            <input type="button" name="CE" value="CE" onClick={del} />
          </td>
          <td>
            <input
              type="button"
              name="/"
              onClick={() => addvalues("/")}
              value="/"
            />
          </td>
        </tr>
        <tr>
          <td>
            <input
              type="button"
              name="7"
              onClick={() => addvalues("7")}
              value="7"
            />
          </td>
          <td>
            <input
              type="button"
              name="8"
              onClick={() => addvalues("8")}
              value="8"
            />
          </td>
          <td>
            <input
              type="button"
              name="9"
              onClick={() => addvalues("9")}
              value="9"
            />
          </td>
          <td>
            <input
              type="button"
              name="*"
              onClick={() => addvalues("*")}
              value="*"
            />
          </td>

          {/* <td><button>8</button></td>
                    <td><button>9</button></td>
                    <td><button>+</button></td> */}
        </tr>
        <tr>
          {/* <td><button>4</button></td>
                    <td><button>5</button></td>
                    <td><button>6</button></td>
                    <td><button>-</button></td> */}

          <td>
            <input
              type="button"
              name="4"
              onClick={() => addvalues("4")}
              value="4"
            />
          </td>
          <td>
            <input
              type="button"
              name="5"
              onClick={() => addvalues("5")}
              value="5"
            />
          </td>
          <td>
            <input
              type="button"
              name="6"
              onClick={() => addvalues("6")}
              value="6"
            />
          </td>
          <td>
            <input
              type="button"
              name="-"
              onClick={() => addvalues("-")}
              value="-"
            />
          </td>
        </tr>
        <tr>
          {/* <td><button>1</button></td>
                    <td><button>2</button></td>
                    <td><button>3</button></td>
                    <td><button>*</button></td> */}

          <td>
            <input
              type="button"
              name="1"
              onClick={() => addvalues("1")}
              value="1"
            />
          </td>
          <td>
            <input
              type="button"
              name="2"
              onClick={() => addvalues("2")}
              value="2"
            />
          </td>
          <td>
            <input
              type="button"
              name="3"
              onClick={() => addvalues("3")}
              value="3"
            />
          </td>
          <td>
            <input
              type="button"
              name="*"
              onClick={() => addvalues("+")}
              value="+"
            />
          </td>
        </tr>

        <tr>
          <td colSpan="2">
            <input
              type="button"
              name="0"
              onClick={() => addvalues("0")}
              value="0"
            />
          </td>
          <td>
            <input
              type="button"
              name="%"
              onClick={() => addvalues("%")}
              value="%"
            />
          </td>
          <td>
            <input type="button" name="=" onClick={equal} value="=" />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Calculator;
