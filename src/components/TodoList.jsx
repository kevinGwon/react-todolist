import React from 'react';
import styled from 'styled-components';
import { useTodoState } from '../TodoContext';
import TodoItem from './TodoItem';

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function TodoList() {
  return (
    <TodoListBlock>
      <TodoItem text={'Todo 1'} />
      <TodoItem text={'Todo 2'} />
      <TodoItem text={'Todo 3'} />
      <TodoItem text={'Todo 4'} />
    </TodoListBlock>
  );
}

export default TodoList;
