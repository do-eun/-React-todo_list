import React, {useState} from "react";
import Layout from "../layout/Layout"
import Header from "../header/Header"
import Form from "../form/Form";
import List from "../list/List"

function Pages() {
    const [todos, setTodos] = useState([
        { id: 1, title: "공부하기", body:"공부하자", isDone: false},
        { id: 2, title: "누워있기", body:"누워있자", isDone: true}
    ])
    return (
        <div>
            <Layout>
                <Header />
                <Form setTodos={setTodos} todos={todos} />
                <List todos={todos} setTodos={setTodos} />
            </Layout>
        </div>
    );
    }

export default Pages;