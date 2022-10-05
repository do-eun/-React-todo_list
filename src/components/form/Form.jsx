import React, {useState} from "react";
import "./style.css"

let num = 3 //id는 3번부터 시작하려고 
const Form = ({setTodos, todos}) => {
   const initialState  = {
    id: 0,
    title: "",
    body: "",
    isDone: false,
   }

   console.log(todos) //찍어서 어떤식으로 나오는지 자주 확인해보기

   const [todo, setTodo] = useState(initialState)
   const onChangeHandler = (event) => {
        const {name,value} = event.target
        setTodo({...todo, [name]: value })
   }

   const onSubmitHandler = (event) => {
    event.preventDefault();
    if (todo.title.trim() === "" || todo.body.trim() === "") return;
    setTodos([...todos, {...todo, id: num }]);
    setTodo(initialState);
    num++;
   }

    return (
    <form className="Form" onSubmit={onSubmitHandler}>
        <div className="InputBox">
            <label className="InputLabel">제목</label>
            <input 
                type="text" 
                className="InputText"  
                value={todo.title}
                name="title" 
                onChange={onChangeHandler} 
            />
            <label className="InputLabel">내용</label>
            <input 
                type="text" 
                className="InputText" 
                value={todo.body}
                name="body" 
                onChange={onChangeHandler}/>
        </div>
        <button className="Btn">추가하기</button>
    </form>
    )
}

export default Form;