import React from "react";

function List(props) {
  return (
    <>
      <div className="list-box">
        <i
          className="fas fa-times"
          onClick={() => {
            props.onSelect(props.id);
          }}
        ></i>
        <li>{props.list}</li>
      </div>
      <hr className="HR" />
    </>
  );
}

export default List;
