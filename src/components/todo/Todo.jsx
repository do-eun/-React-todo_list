import React from "react";
import "./style.css"

const Todo = ({todo, onDeleteHandler, onEditHandler}) => {
    return (
        <div className="TodoBox">
            <div>
                <h2>{todo.title}</h2>
                <div>{todo.body}</div>
            </div>
            <div className="BtnBox">
                <button className="DeleteBtn"
                onClick={()=> onDeleteHandler(todo.id)}
                >삭제하기</button>
                <button className="CilckBtn"
                onClick={()=> onEditHandler(todo.id)}
                >{todo.isDone ? "취소" : "완료"}</button>
            </div>
        </div>

    )
}

export default Todo;