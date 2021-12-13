import React,{useRef, useState} from 'react';
import { connect } from 'react-redux';
import { addTodos, removeTodos, updateTodo, completeTodos } from '../redux/reducer';


const mapStateToProps = (state)=>{
    return{
        todos: state,
    };
};
const mapDispatchToProps = (dispatch)=>{
    return{
        addTodo:(obj) => dispatch(addTodos(obj)),
        removeTodo: (id) => dispatch(removeTodos(id)),
        updateTodo:(obj)=> dispatch(updateTodo(obj)), 
        completeTodos:(id)=> dispatch(completeTodos(id)),
    }
}

const Todos = (props) => {

    const [todo, setTodo] = useState("")

    const handleChange = (e)=>{
        setTodo(e.target.value);
    };
    console.log("store props", props)
    return (
        <div className='addTodos'>
        <input type="text" onChange={(e)=>handleChange(e)} className="todo-input" />
        <button className='add-btn' onClick={() => props.addTodo({
            id:Math.floor(Math.random() * 1000),
            item:todo,
            completed:false,
        })}>Add</button>
        <br />
        </div>
    )
}
//we cen 
export default connect(mapStateToProps, mapDispatchToProps)(Todos);