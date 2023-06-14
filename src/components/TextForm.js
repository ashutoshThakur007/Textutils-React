import React,{useState} from 'react'


export default function TextForm(props) {

    const handleUpClick = () =>{
        // console.log("Upper case was clicked " + text )
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to uppercase","success")
    }
    const handleLoClick = () =>{
        // console.log("Upper case was clicked " + text )
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to lowercase","success")

    }
    const handleOnChange = (event) =>{
        // console.log("On change")
        setText(event.target.value)

    }
    const handleClear = (event) =>{
        let newText = ''
        setText(newText)
        props.showAlert("Clear all the text","success")

    }
    const handleCopy = ()=>{
    
        navigator.clipboard.writeText(text)
        document.getSelection().removeAllRanges()
        props.showAlert("Copy all the text","success")

    }
    const handleExtraSpaces= () =>{
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Removed all the extra spaces","success")

    }

    const [text,setText] = useState('')

  return (
    <>
        <div className='container' style={{color:props.mode==='dark'? 'white':'#042743'}}>
            <h2 className='mb-2'>{props.heading}</h2>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'? '#13466e':'white',color:props.mode==='dark'? 'white':'#042743'}}  id="mybox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-3 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-3 my-1" onClick={handleClear}>Clear</button>
            <button disabled={text.length===0} className="btn btn-primary mx-3 my-1" onClick={handleCopy}>Copy text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-3 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container" style={{color:props.mode==='dark'? 'white':'#042743'}}>
            <h3>Your text summary</h3>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Nothing to preview!"}</p>
        </div>
    </>
  )
}
