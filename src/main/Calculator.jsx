import React,{useState} from 'react'
import Button from '../components/Button'
import Display from '../components/Display'
import './calculator.css'

const initialState = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0
}

const Calculator = props => {

  const [state, setState] = useState(initialState)

  const clearMemory = () => setState(initialState)

  const setOperation = (operation) => {
    console.log(operation)
  }
  
  const addDigit = (n) => {
    console.log(n)
  }

  return (
    <div className="calculator">
      <Display value={state.displayValue} />
      <Button label="AC" click={clearMemory} triple/>
      <Button label="/" click={setOperation} operation/>
      <Button label="7" click={addDigit} />
      <Button label="8" click={addDigit} />
      <Button label="9" click={addDigit} />
      <Button label="*" click={setOperation} operation/>
      <Button label="4" click={addDigit} />
      <Button label="5" click={addDigit} />
      <Button label="6" click={addDigit} />
      <Button label="-" click={setOperation} operation/>
      <Button label="1" click={addDigit} />
      <Button label="2" click={addDigit} />
      <Button label="3" click={addDigit} />
      <Button label="+" click={setOperation} operation/>
      <Button label="0" click={addDigit} double/>
      <Button label="." click={addDigit} />
      <Button label="=" click={setOperation} operation/>
    </div>
  )
}

export default Calculator