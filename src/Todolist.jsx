import React, { useState } from "react";
import List from "./List";
function Todo() {
  const [items, setItems] = useState();
  const [input, setInput] = useState([]);

  function itemEvent(e) {
    let text = e.target.value;
    setItems(text);
  }
  function toAdd(e) {
    setInput((list) => {
      return [...list, items];
    });
    setItems("");
  }

  function deleteitems(id) {
    console.log("deleted");

    setInput((oldArray) => {
      return oldArray.filter((arrele, index) => {
        return index !== id;
      });
    });
  }

  return (
    <>
      <header>
        <h1>Project of To Do List.</h1>
      </header>
      <div className="main-div">
        <div className="inner-div">
          <h1>Let's Do It</h1>
          <div className="add-items">
            <input
              type="text"
              placeholder="Add a Item"
              onChange={itemEvent}
              value={items}
            />
            <button className="btn" onClick={toAdd}>
              +
            </button>
          </div>

          <ul>
            {input.map((textvalue, index) => {
              return (
                <List
                  key={index}
                  id={index}
                  list={textvalue}
                  onSelect={deleteitems}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Todo;
