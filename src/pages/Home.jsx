import React from "react";
import { useState } from "react";
import Todos from "../components/Todos";

const Home = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === title) {
      setTitle(value);
    } else if (name === content) {
      setContent(value);
    }
  };

  const validte = () => {
    if (title.trim() === "") {
      alert("제목을 입력해주세요!");

      return false;
    } else if (content.trim() === "") {
      alert("내용을 입력해주세요!");

      return false;
    }

    return true;
  };

  const clickAddListHandler = () => {
    if (!validte) return;
  };

  return <Todos />;
};

export default Home;
