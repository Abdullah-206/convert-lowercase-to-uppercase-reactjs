import React, {useState} from 'react'


export default  function TextForm(props) {
    const handleUpClick = () =>{
        console.log("Uppercase was Clicked");
        let newText = text.toUpperCase(); 
        setText(newText);
    }
    const handleonChange = (event) =>{
        console.log("on Change");
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter Text Here');
  return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <label for="myBox" className="form-label">Example textarea</label>
            <textarea className="form-control" value={text} onChange={handleonChange} id="myBox" rows="3"></textarea>
            </div>
            <button type="button" className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>


    </div>
  )
}

