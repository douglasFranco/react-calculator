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

  const [state, setState] = useState({...initialState})

  const clearMemory = () => setState({...initialState})

  const setOperation = (operation) => {
    if(state.current === 0){
      state.operation = operation
      state.current = 1
      state.clearDisplay = true
      setState({...state})
    }else{
      const equals = operation === '='
      try{
        state.values[0] = eval(`${state.values[0]} ${state.operation} ${state.values[1]}`)
      }catch(e){
        state.values[0] = state.displayValue
      }
      
      state.values[1] = 0
      state.displayValue = state.values[0]
      state.operation = equals ? null : operation
      state.current = equals ? 0 : 1
      state.clearDisplay = !equals
      setState({...state})
    }
  }
  
  const addDigit = (n) => {
    if(n === '.' && state.displayValue.includes('.')){
      return
    }

    const clearDisplay = state.displayValue === '0' || state.clearDisplay
    const currentValue = clearDisplay ? '' : state.displayValue
    state.displayValue = currentValue + n
    state.clearDisplay = false
    setState({...state})
    console.log(state)

    if(n !== '.') {           
      state.values[state.current ] =  parseFloat(state.displayValue)
      setState({...state})
    }
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