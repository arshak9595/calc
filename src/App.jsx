import React, {useState} from 'react'
import './App.css'

function App() {
    const [result,
        setResult] = useState('')
    const inClick = (e) => {
        if (e.target.name)
            setResult(result.concat(e.target.name))
    }
    const clear = () => {
        setResult('')
    }
    const backSpace = () => {
        setResult(result.slice(0, -1))
    }
    const calculate = () => {
        const numbers = result.split(/\+|\-|\*|\//)
        console.log(sum)
    }

    return (
        <div className="App">
            <form onSubmit={(evt) => {
                evt.preventDefault()
            }}>
                <input type="text" onChange={(evt) => {
                    setResult(evt.target.value)
                }} value={result}/>
                <div className="keypad">
                    <button type="button" onClick={clear} id="clear">Clear</button>
                    <button type="button" onClick={backSpace}>C</button>
                    <button type="button" name="/" onClick={inClick}>/</button>
                    <button type="button" name="7" onClick={inClick}>7</button>
                    <button type="button" name="8" onClick={inClick}>8</button>
                    <button type="button" name="9" onClick={inClick}>9</button>
                    <button type="button" name="*" onClick={inClick}>*</button>
                    <button type="button" name="4" onClick={inClick}>4</button>
                    <button type="button" name="5" onClick={inClick}>5</button>
                    <button type="button" name="6" onClick={inClick}>6</button>
                    <button type="button" name="+" onClick={inClick}>+</button>
                    <button type="button" name="1" onClick={inClick}>1</button>
                    <button type="button" name="2" onClick={inClick}>2</button>
                    <button type="button" name="3" onClick={inClick}>3</button>
                    <button type="button" name="-" onClick={inClick}>-</button>
                    <button type="button" name="0" onClick={inClick}>0</button>
                    <button type="button" name="." onClick={inClick}>.</button>
                    <button type="submit" name="=" id="result" onClick={calculate}>=</button>
                </div>
            </form>

        </div>

    )
}

export default App
