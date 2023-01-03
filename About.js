import React from "react";

export default function About(props) {
  return (
    <>
      <div className={`container p-4 bg-${props.mode==='light'?'success':'dark'} bg-gradient bg-opacity-50`} >
        <h2 className={`my-4 text-${props.mode==='light'?'dark':'light'}`}>About Us</h2>
        <div className="accordion my-5" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className={`accordion-button text-${props.mode==='light'?'dark':'light'} `}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={{backgroundColor: props.mode==='dark'?'#333333':'white' , fontSize:"1.2rem"}}
                
              >
                <strong>Analyze Your Text</strong>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
              style={{backgroundColor: props.mode==='dark'?'#191919':'white'}}
            >
              <div className={`accordion-body text-${props.mode==='light'?'dark':'light'}`}>
                <strong>Play With Text </strong> gives you the way to analyze your text quickly and efficiently. It shows you analytics like instant word count , characters count , number of spaces , and how much time it would take to read . 
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className={`accordion-button collapsed text-${props.mode==='light'?'dark':'light'}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                style={{backgroundColor: props.mode==='dark'?'#333333':'white' , fontSize:"1.2rem"}}
              >
                <strong>Free To Use</strong> 
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
              style={{backgroundColor: props.mode==='dark'?'#191919':'white'}}
            >
              <div className={`accordion-body text-${props.mode==='light'?'dark':'light'}`}>
                <strong>Play with Text </strong> is a tool that helps you to manipulate your text according to your desire . 
                <p>Some features of Play With Text : </p>
                <li>It helps you to convert your text in Upper Case</li>
                <li>It helps you to convert your text in Lower Case</li>
                <li>It helps you to remove all the Extra Spaces in your text</li>
                <li>It helps you to Copy your finally edited text </li>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className={`accordion-button collapsed text-${props.mode==='light'?'dark':'light'}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                style={{backgroundColor: props.mode==='dark'?'#333333':'white' , fontSize:"1.2rem"}}
              >
                <strong>Browser Compatible</strong> 
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
              style={{backgroundColor: props.mode==='dark'?'#191919':'white'}}
            >
              <div className={`accordion-body text-${props.mode==='light'?'dark':'light'}`}>
                This word counter software works in any web browser such as Chrome , firefox , internet explorer , safari , opera . It suits to count characters in facebook , blog , excel documents , pdf documents , essays , etc .
              </div>
            </div>
          </div>
        </div>
        {/* <button className="btn btn-primary mt-2 mx-2" onClick={toggleStyle}>{btnText}</button> */}
      </div>
    </>
  );
}
