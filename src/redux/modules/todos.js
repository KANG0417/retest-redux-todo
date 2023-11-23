// import uuid from "react-uuid";
import shortid from "shortid";

const initialState = [
  {
    id: shortid.generate(),
    title: "",
    body: "",
    isDone: false,
  },
];

const CHANGE_TITLE = "title/CHANGE_TITLE";

export const changeTitle = (title) => ({ type: CHANGE_TITLE, title });

// 리듀서
const todos = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TITLE:
      return {
        ...state,
        input: action.input,
      };
    case "ADD_TODO":
      return {
        ...state,
        //TODO: 여기 작성
      };
    case "DELETE_TODO":
      return; //TODO: 여기 작성

    case "SWITCH_TODO":
      return; //TODO: 여기 작성

    default:
      return state;
  }
};

export default todos;
