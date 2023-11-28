import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Button from "./Button";
import { addTodo } from "../redux/modules/todos";

function Todos() {
  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  const newTodo = {
    id: crypto.randomUUID,
    title: todos.title,
    body: todos.body,
  };

  return (
    <>
      <StTitleH1>Todos</StTitleH1>
      <form method="get">
        <label>
          제목: <StTitleInput type="text" />
        </label>
        <label>
          할일: <StContentTextArea />
        </label>
        <Button
          onClick={() => {
            dispatch(addTodo({ newTodo }));
          }}
        >
          등록
        </Button>
      </form>
    </>
  );
}

export default Todos;

const StTitleH1 = styled.h1`
  font-size: 2rem;
`;

const StTitleInput = styled.input`
  &label {
    font-size: 2rem;
  }
`;

const StContentTextArea = styled.textarea``;
