import React,{useState} from 'react'
import { addTodos, removeTodos, updateTodo, completeTodos } from '../redux/reducer';
import { connect } from 'react-redux';
import Todoitem from './Todoitem';
import { AnimatePresence, motion } from 'framer-motion';


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

const Displaytodos = (props) => {
    const [sort, setSort] = useState("active")
    return (
        <div className="displaytodos">
            <div className="buttons">
                <motion.button 
                whileHover={{scale:1.1}}
                whileTap={{scale:0.9}}
                onClick={()=>setSort("active")}>Active</motion.button>
                <motion.button
                whileHover={{scale:1.1}}
                whileTap={{scale:0.9}}
                onClick={()=>setSort("completed")}>Completed</motion.button>
                <motion.button
                whileHover={{scale:1.1}}
                whileTap={{scale:0.9}}
                onClick={()=>setSort("all")}>All</motion.button>
            </div>
            <ul>
            <AnimatePresence>
            {
                    props.todos.length > 0 && sort === "active" ? 
                    props.todos.map(item =>{
                        return(
                            item.completed === false &&(
                            <Todoitem 
                                key={item.id}
                                item={item}
                                removeTodo={props.removeTodo}
                                updateTodo={props.updateTodo}
                                completeTodos={props.completeTodos}
                            />
                            )
                        );
                    }) 
                    : null}
                    {/* For the Completed Todos */}
                    {
                    props.todos.length > 0 && sort === "completed" ? 
                    props.todos.map(item =>{
                        return(
                            item.completed === true &&(
                            <Todoitem 
                                key={item.id}
                                item={item}
                                removeTodo={props.removeTodo}
                                updateTodo={props.updateTodo}
                                completeTodos={props.completeTodos}
                            />
                            )
                        );
                    }) 
                    : null}
                    {/* For All Todos */}
                    {
                    props.todos.length > 0 && sort === "all" ? 
                    props.todos.map(item =>{
                        return(
                            <Todoitem 
                                key={item.id}
                                item={item}
                                removeTodo={props.removeTodo}
                                updateTodo={props.updateTodo}
                                completeTodos={props.completeTodos}
                            />
                        );
                    }) 
                    : null}
            </AnimatePresence>
            </ul>
        </div>
    )
}

export default connect(mapStateToProps,mapDispatchToProps)(Displaytodos);
