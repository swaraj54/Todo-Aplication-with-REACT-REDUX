import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {incCount } from '../redux/actions'


function Counter() {

    const data = useSelector((store)=> store.count)
    const dispatch = useDispatch();

  return (
    <div>
        <h1>Number of Todos : {data}</h1>
        {/* <button onClick={()=>{
            dispatch(incCount(1))
        }}>Add 1</button> */}
    </div>
  )
}

export default Counter