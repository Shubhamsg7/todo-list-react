import React, { useState } from "react";
import TodoList from "./TodoList";

const App = () => {

  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };
  
  const deleteItems = (id) => {
    setItems((oldItems) => {
      console.log("Deleted");
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };


  return (
    <>
      <div className="main_div">
        <div className="center">
          <h1>Todo List</h1>
          <br/>
          <input 
            type="text" 
            placeholder="Add a Items" 
            onChange={itemEvent} 
            value={inputList}
          />
          <button onClick={listOfItems}> 
          <i 
            className="fa fa-plus" 
            aria-hidden="true"/> 
          </button>
          <ol>
            {Items.map((itemval, index) => {
              return (
                <TodoList 
                  key={index}
                  id={index}
                  text={itemval}
                  onSelect={deleteItems}
                />
              );
            })}            
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
