import React, { useState } from "react";

export default function Textform(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked" + text);
    let newtext= text.toUpperCase();
    setText(newtext);
  };
  const handleLoClick = () => {
    console.log("lowercase was clicked" + text);
    let newtext= text.toLowerCase();
    setText(newtext);
  };
  const handleclearClick = () => {
    let newtext= ('');
    setText(newtext);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
    console.log("On change");
  };

  const [text, setText] = useState("");

  return (
    <>
    <div className="container">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myText" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>
        Convert to Uppercase
      </button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>
        Convert to Lowercase
      </button>
      <button className="btn btn-primary mx-2" onClick={handleclearClick}>
        Clear text
      </button>
    </div>
    <div className="container my-2">
        <h1>Your text summary</h1>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length}characters</p>
        <p>{0.008 *text.split(" ").length }Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  );
}
