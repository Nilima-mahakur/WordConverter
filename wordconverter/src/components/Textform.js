import React, { useState } from 'react'


export default function Textform(props) {

    const handleupclick = () => {
        let newText = text.toLocaleUpperCase();
        setText(newText)
    }
    const handlelowerclick = () => {
        let newText = text.toLocaleLowerCase();
        setText(newText)
    }
    const handleclearclick = () => {
        let newText = " ";
        setText(newText)
    }
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }


    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const [text, setText] = useState('');
    return (
        <>
        <div className='container my-4'>
            <h5>"This is a single page application which is used to convert the passages into complete Capital or small letters. It is also used to copy passages and paste it as per the usage.Also it helps to remove unwanted spaces in the passages used for conversion".</h5>
</div>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h3>{props.heading}</h3>

                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#dee2e6' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="mybox" rows="10" ></textarea>
                </div>
                <button className='btn btn-info  mx-2  my-1' onClick={handleupclick}>Convert to upper case</button>
                <button className='btn btn-info mx-2 my-1' onClick={handlelowerclick}>Convert to Lower case</button>
                <button className='btn btn-info mx-2 my-1' onClick={handleclearclick}>Clear text</button>
                <button className='btn btn-info mx-2 my-1' onClick={handleCopy}>Copy text</button>
                <button className='btn btn-info mx-2 my-1' onClick={handleExtraSpaces}>Remove Extra spaces</button>
            </div>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
               
                <p>Here are the required information entered in the textarea.</p>
                <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
