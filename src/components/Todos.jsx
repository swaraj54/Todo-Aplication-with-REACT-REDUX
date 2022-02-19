import React, { useState ,useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addTodo,incCount,addTodoLoading ,addTodoSuccess,addTodoError,getTodoLoading,getTodoSuccess} from '../redux/actions';
import axios from 'axios';

function Todos() {

    const {loading,data,error} = useSelector((store) => store.todos)
    const dispatch = useDispatch();
    const [text, setText] = useState("");

    useEffect(()=>{
        getTodos();
    },[])

    const getTodos=()=>{
        dispatch(getTodoLoading())
        axios.get("http://localhost:3001/todos").then(({data})=>{
            dispatch(getTodoSuccess(data))
        })
    }

    return loading ?( "loading...") :  (
        <div>
            <input type="text" onChange={(e) => setText(e.target.value)}></input>
            <button onClick={() => {
                
            dispatch(incCount(1))
                // dispatch(addTodo({ id: Date.now(), title: text, status: false }))
                dispatch(addTodoLoading())
                axios.post("http://localhost:3001/todos",{ title:text, status:false})
                 .then((data)=>{
                     dispatch(addTodoSuccess())
                     getTodos();
                 })
                 .catch((data)=>{
                     dispatch(addTodoError())
                 })
            }}>Add todo</button>
            <div>{data.map((e) => (
                <div key={e.id} >{e.title}</div>
            ))}</div>
        </div>
    )
}

export default Todos