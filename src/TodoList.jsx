import React from "react";

const TodoList = (props) => {
    return (
    <>
    <div className="list">
        <li>
        <i 
            className="fa fa-times" 
            aria-hidden="true" 
            onClick={() => {
                props.onSelect(props.id)
        }} />
        &nbsp; {props.text}        
</li>
    </div>
    </>
    );
}

export default TodoList;