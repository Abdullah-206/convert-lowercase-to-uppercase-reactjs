import React, {useState} from 'react'


export default  function TextForm(props) {
    const handleUpClick = () =>{
        console.log("Uppercase was Clicked");
        let newText = text.toUpperCase(); 
        setText(newText);
    }

    const handleLoClick = () =>{
      console.log("Uppercase was Clicked");
      let newText = text.toLowerCase(); 
      setText(newText);
  }

    const handleonChange = (event) =>{
        console.log("on Change");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
  return (
    <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            
            <textarea className="form-control" value={text} onChange={handleonChange} id="myBox" rows="3"></textarea>
            </div>
            <button type="button" className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button type="button" className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
    </div>
    <div className='container my-3'>
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").length} Words and {text.length} Characters</p>
      <p>{0.008 * text.split(" ").length} Minutes Read</p>
      <h2>preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}

