import React,{useRef} from 'react'
import {AiFillEdit} from 'react-icons/ai'
import {IoCheckmarkDoneSharp, IoClose} from 'react-icons/io5'
import { motion } from 'framer-motion'


const Todoitem = (props) => {
    const  inputRef = useRef(true);
    const changeFocus = ()=>{
        inputRef.current.disabled = false;
        inputRef.current.focus();
    }
    const update = (id, value,e)=>{
        if(e.which === 13){
            updateTodo({id, item:value});
            inputRef.current.disabled = true;
        }
    }
    const {item, updateTodo} = props;
    return (
                    <motion.li
                    initial={{x:"150vw",
                    transition:{type:"spring", duration:2}}}
                    animate={{x:0,transition:{type:"spring", duration:2}}}
                    whileHover={{
                        scale:.9, transition:{type:"spring", duration:.1}
                    }}
                    exit={{
                        x:"-60vw",
                        scale:[1,0],
                        transition:{duration:.5},
                        backgroundColor:"rgba(255,0,0,.1)",
                    }}

                    key={item.id} className="card">
                    <textarea 
                    ref={inputRef} 
                    disabled={inputRef} 
                    defaultValue={item.item} 
                    onKeyPress={(e)=>update(item.id, inputRef.current.value, e)}/>
                    <div className="btns">
                    <motion.button 
                    whileHover={{scale:1.4}}
                    whileTap={{scale:0.9}}
                    onClick={()=>changeFocus()}><AiFillEdit/></motion.button>
                    {
                        item.completed === false &&<motion.button
                        whileHover={{scale:1.4}}
                        whileTap={{scale:0.9}}
                        style={{color:"green"}}
                        onClick={()=> props.completeTodos(item.id)}
                        >
                            <IoCheckmarkDoneSharp/>
                        </motion.button>
                    }
                    <motion.button
                    whileHover={{scale:1.4}}
                    whileTap={{scale:0.9}}
                    style={{color:"red"}}
                     onClick={()=> props.removeTodo(item.id )}>
                        <IoClose/>
                    </motion.button>
                    </div>
                    {
                        item.completed && <span className="completed">done</span>
                    }
                    </motion.li>
    )
}

export default Todoitem
