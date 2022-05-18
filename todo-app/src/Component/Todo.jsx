import React, { useEffect } from "react";
import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { MdDeleteOutline } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";
import "./styling.css";




// get data from localStorage
const dataFromLocalStorage = ()=>{
  const lists = JSON.parse(localStorage.getItem("list"))
  if(lists){
    return JSON.parse(localStorage.getItem("list"))
  }else{
    return []
  }
}

const Todo = () => {
  const [inputv, setInputv] = useState("");
  const [addItem, setAddItem] = useState(dataFromLocalStorage());

  const addTodo = () => {
    if (!inputv) {
    } else {
      const allInp = {id: new Date().getTime().toString(), name:inputv}
      setAddItem([...addItem, allInp]);
      setInputv("");
    }
  };
  const deleteitem = (itemid) => {
    const updateItem = addItem.filter((elm) => {
      return  itemid !== elm.id;
    });

    setAddItem(updateItem);
  };
  const clearAll = () => {
    setAddItem([]);
  };
  useEffect(()=>{
    localStorage.setItem("list", JSON.stringify(addItem))
  }, [addItem])
  
  return (
    <>
      <div className="mainDiv">
        <div className="div2">
          <input
            type="text"
            placeholder="Enter"
            value={inputv}
            onChange={(e) => setInputv(e.target.value)}
          /> <br />
    <button onClick={addTodo}> add</button>
    <button onClick={clearAll}>Clear All</button>

          {addItem.map((element) => {
            return (
              <div className="itemadd" key={element.id}>
                {" "}
                <h3>{element.name} </h3>
                <div className="">

                 <AiOutlineEdit  className="icons"/>{" "}
                <AiFillDelete className="icons" onClick={() => deleteitem(element.id)} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Todo;
