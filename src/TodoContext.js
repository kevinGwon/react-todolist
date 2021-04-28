import React, { createContext, useReducer, useContext } from 'react';

const TodoStateContext = createContext(null);

function todoReducer(state, action) {
  switch (action.type) {
    default:
      return state;
  }
}

const initialTodos = [
  {
    id: 1,
    text: '아침 산책',
    done: true
  },
  {
    id: 2,
    text: '오늘의 뉴스 읽기',
    done: true
  },
  { id: 3, text: '샌드위치 사 먹기', done: false },
  { id: 4, text: '리액트 공부하기', done: false }
];

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);

  return (
    <TodoStateContext.Provider value={state}>
      {children}
    </TodoStateContext.Provider>
  );
}

export function useTodoState() {
  return useContext(TodoStateContext);
}
