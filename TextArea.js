import React, { useState } from "react";

export default function TextArea(props) {
  const [text, setText] = useState("");
  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };
  const handleUpClick = () => {
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase","success")
  };
  const handleLowClick = () => {
    console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase","success")
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/)
    setText(newText.join(" "));
    props.showAlert("Extra-Space removed","success")
  };
  const handleCopyText = () => {
    let text= document.getElementById("Textarea");
    text.select()
    text.setSelectionRange(0,9999)
    props.showAlert("Copied to clipboard","success")
  };
  const handleClearClick = () => {
    // console.log("");
    let newText = ""
    setText(newText);
    props.showAlert("Cleared","success")
  };
  
  return (
    <>
      <div className={`container p-4 mt-1 bg-${props.mode==='light'?'success':'dark'} bg-gradient bg-opacity-50`} style={{textAlign:"center"}}>
        <h2 className={`my-4 text-center text-${props.mode==='light'?'dark':'light'}`}>{props.heading}</h2>
        <div className="mb-3">
          {/* <textarea
            className="form-Control "
            value={text}
            onChange={handleOnChange}
            id="mybox"
            rows="8"
          ></textarea> */}
          <textarea className={`form-control  text-${props.mode==='light'?'dark':'light'}`} style={{backgroundColor: props.mode==='dark'?'#06133F ':'white'}} value={text} onChange={handleOnChange} id="Textarea" rows="7" placeholder="Enter your text" required ></textarea>
        </div>
        <button disabled={text.length===0} className= {`btn btn-${props.mode==='light'?'success':'primary'} mt-2 mx-2 `} onClick={handleUpClick}>
          Convert to uppercase
        </button>
        <button disabled={text.length===0} className= {`btn btn-${props.mode==='light'?'success':'primary'} mt-2 mx-2 `} onClick={handleLowClick}>
          Convert to lowercase
        </button>
        <button disabled={text.length===0} className= {`btn btn-${props.mode==='light'?'success':'primary'} mt-2 mx-2 `} onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
        <button disabled={text.length===0} className= {`btn btn-${props.mode==='light'?'success':'primary'} mt-2 mx-2 `} onClick={handleCopyText}>
          Copy
        </button>
        <button disabled={text.length===0} className= {`btn btn-${props.mode==='light'?'success':'primary'} mt-2 mx-2 `} onClick={handleClearClick}>
          Clear
        </button>
        
      </div>
      <div className={`container p-4 bg-${props.mode==='light'?'success':'dark'} bg-gradient bg-opacity-50`}>
        <h2 className={`my-4 text-center text-${props.mode==='light'?'dark':'light'}`}>Your text summary</h2>
        <p className={`my-4 text-center text-${props.mode==='light'?'dark':'light'}`}> {text.split(/\s/).filter((element)=>{return element.length!==0}).length} words , {text.length} characters, {text.split(" ").length-1}spaces , {.008*text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read</p>
        <h3 className={`my-4 text-center text-${props.mode==='light'?'dark':'light'}`}>Preview</h3>
        <p className={`my-4 text-center text-${props.mode==='light'?'dark':'light'}`}>{text.length>0?text:"Nothing to preview."}</p>
      </div>
    </>
  );
}
TextArea.defaultProps = {
  heading: "Heading Here",
};
