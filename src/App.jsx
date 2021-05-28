import "./styles.css";
import { useState } from "react";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([
    "あああああ",
    "いいいいい"
  ]);

  const [completeTodos, setCompleteTodos] = useState(["えええええ"]);

  //このevent.target.valueは決まり文句として覚える
  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    //incompleteTodsの配列＋todoTextを配列としてnewTodosにセットする。
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
    // alert(todoText);
  };
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    //spliceについては下記を参照
    //https://techacademy.jp/magazine/37922
    //指定したindexを削除
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
    // alert("削除"+index);
  };
  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    //指定したindexを削除
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  return (
    <>
      <div className="input-area">
        <input
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className-="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
