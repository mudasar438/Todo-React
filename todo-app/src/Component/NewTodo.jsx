import React from 'react'
import "./styling.css";
import {useEffect, useState} from 'react';


const getTodoFromlocal  =()=>{
    const lists = JSON.parse(localStorage.getItem("list"))
    if(!lists){
        return []
    }
    return lists


}


function NewTodo() {
    const [input, setInput] = useState("")
    const [Todo, setTodo] = useState(getTodoFromlocal())
    const addTodo = ()=>{
        if(!Todo){

        }else{

            const adIdTodo = {id:new Date().getTime().toString(), name:input}
    
            setTodo([...Todo, adIdTodo])
            setInput('')
        }

    }
  
// Delete item function 
    const deleteItem = (del)=>{
        console.log(del)
        console.log("delete button clicked")
        const afterdelete = Todo.filter((elmId)=>{
        console.log(elmId.id)

            return del !== elmId.id
        })
        setTodo(afterdelete);
    }
    // Clear all function 
    const clearAll = ()=>{
        setTodo([])
    }
// Edit function
 const EditTodo = (nametodo, idtodo)=>{
    //  console.log(nametodo)
    //  console.log(idtodo)
     setInput(nametodo)
 }
const saveEdit = ()=>{
    console.log(input)

}


    useEffect(()=>{
        localStorage.setItem("list", JSON.stringify(Todo))
    }, [Todo])


  return (
<>

<div className="maindiv">
    <div className="inp-btn">
        <input type="text" placeholder='Enter Todo' value={input} onChange={(e)=> setInput(e.target.value)} />
       <button onClick={addTodo}>AddTodo</button>
       <button onClick={clearAll}>ClearAll</button>
       <button onClick={()=>saveEdit}>Save Edit</button>
    </div>
    <div className="output">
        <ul>{Todo.map((element)=>{

           return <li key={element.id}>{element.name}<button onClick={()=>EditTodo(element.name, element.id)}>Edit</button> <button onClick={()=>deleteItem(element.id)}>Delete</button></li>
        })
            }
            
        </ul>
    </div>
</div>
</>
  )
}

export default NewTodo