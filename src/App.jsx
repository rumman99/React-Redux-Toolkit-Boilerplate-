import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, decrementByNumber, getItemSelector, increment, incrementByNumber } from './Redux/Slice/CounterSlice';
import { fetchingApi, getApiSelector } from './Redux/Slice/FetchSlice';

function App() {
  const count= useSelector(getItemSelector);
  const users= useSelector(getApiSelector);
  const dispatch= useDispatch()

  if(users.isLoading){
    return <h1 style={{color:'red'}}>LOADING.......</h1>
  }

  return (
    <>
      <h4>Number: {count}</h4>
      <button onClick={()=> dispatch(incrementByNumber(5))}>Increment</button>
      <button onClick={()=> dispatch(decrementByNumber(5))}>Decrement</button>
      <br/>
      <br/>
      <br/>
      {users.data && users.data.map(user=> <li key={user.id}>{user.name}</li>)}
      <button onClick={()=> dispatch(fetchingApi())}>Show Users</button>
    </>
  )
}

export default App
