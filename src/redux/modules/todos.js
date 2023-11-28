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
const CHANGE_BODY = "body/CHANGE_BODY";
const ADD_TODO = "todos/ADD_TODO";
const DELETE_TODO = "todos/DELETE_TODO";
const SWITCH_TODO = "todos/SWTICH_TODO";

export const changeTitle = (title) => ({ type: CHANGE_TITLE, title });
export const changeBody = (body) => ({ type: CHANGE_BODY, body });
export const addTodo = (todos) => ({ type: ADD_TODO, todo: { todos } });

export // 리듀서
const todos = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TITLE:
      return {
        ...state,
        input: action.input,
      };
    case CHANGE_BODY:
      return {
        ...state,
        textArea: action.textArea,
      };
    case ADD_TODO:
      return {
        ...state,
        //TODO: 여기 작성
        todos: state.todos,
      };
    case DELETE_TODO:
      return; //TODO: 여기 작성

    case SWITCH_TODO:
      return; //TODO: 여기 작성

    default:
      return state;
  }
};

export default todos;
