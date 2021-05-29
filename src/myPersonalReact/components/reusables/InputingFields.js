import React,{ useState }  from 'react'

const InputingFields = ({label,datakey,getData,word}) => {
    const [text,setText] = useState('')
    const inputContainer={
        position:'relative',
        marginBottom:'10px'
    }
    const updateText=(value)=>{
        if (datakey) getData(datakey.toLowerCase(),value)
        setText(value)
    }
    return (
        <div style={inputContainer}>
            <label htmlFor="text">{label}</label>
            <input type="text"value={text} onChange={(e)=>updateText(e.target.value)} placeholder={word}></input>
        </div>
    )
}
InputingFields.defaultProps={
    value:"......"
}
export default InputingFields
