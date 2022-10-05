import React from "react";
import Todo from "../todo/Todo";
import "./style.css"

const List = ({todos, setTodos}) => {
    const onDeleteHandler = (todoId) => {
        const newTodos = todos.filter((todo) => {
            return todo.id !== todoId
        })
        setTodos(newTodos);
    }
    
    const onEditHandler = (todoId) => {
        const newTodos = todos.map((todo) => {
          if (todo.id === todoId) {
            return {
              ...todo,
              isDone: !todo.isDone,
            };
          } else {
            return { ...todo };
          }
        });
    
        setTodos(newTodos);
      };

    return (
        <div className="ListBox">
            <h2>Working.. 🔥</h2>
            <div className="todoBox">
                {todos.map((todo) => {
                    if (!todo.isDone) {
                        return (
                            <Todo
                                todo={todo}
                                key={todo.id}
                                setTodos={setTodos}
                                onDeleteHandler={onDeleteHandler}
                                onEditHandler={onEditHandler}
                            />
                        );
                    } else {
                        return null;
                    }
                })}
            </div>
            <h2>Done..! 🎉</h2>
            <div className="todoBox">
                {todos.map((todo) => {
                    if (todo.isDone) {
                        return (
                            <Todo
                                todo={todo}
                                key={todo.id}
                                setTodos={setTodos}
                                onDeleteHandler={onDeleteHandler}
                                onEditHandler={onEditHandler}
                            />
                        );
                    } else {
                        return null;
                    }
                })}
            </div>
        </div>
    );
}

export default List;