import {createSlice} from '@reduxjs/toolkit';
const initialState =[];
const addTodoReducer = createSlice({
    name:"todos",
    initialState,
    reducers:{
          //Adding the Todo
        addTodos: (state, action) => {
            state.push(action.payload);
            return state;
          },
         //remove the Todo
        removeTodos: (state, action)=>{
          return state.filter(item => item.id!==action.payload);
          },
         //Uodate the Todo
          updateTodo:(state, action)=>{
            return state.map(todo => {
              if(todo.id === action.payload.id){
                return{
                  ...todo,
                  item: action.payload.item,
                }  
              }
              return todo;
            })
          },
          //completed
          completeTodos:(state, action)=>{
            return state.map(todo => {
              if(todo.id === action.payload){
                return{
                  ...todo,
                  completed: true,

                }  
              }
              return todo;
            })
          }
        }
    })
    

    export const {addTodos,removeTodos, updateTodo,completeTodos}= addTodoReducer.actions;
    export const reducer = addTodoReducer.reducer;