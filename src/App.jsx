import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, decrementByNumber, getItemSelector, increment, incrementByNumber } from './Redux/Counter/CounterSlice';

function App() {
  const count= useSelector(getItemSelector);
  const dispatch= useDispatch()

  return (
    <>
      Number: {count}
      <button onClick={()=> dispatch(incrementByNumber(5))}>Increment</button>
      <button onClick={()=> dispatch(decrementByNumber(5))}>Decrement</button>
    </>
  )
}

export default App
