import React, { useState, useEffect, FormEvent } from 'react';
import { uuid } from 'uuidv4';
import { FiTrash2 } from 'react-icons/fi';
import { Title, Form, Show, Error, Button } from './styles';

interface Todo {
  title: string;
  uuid: string;
}

const Dashboard: React.FC = () => {
  const [newToDo, setNewToDo] = useState('');
  const [inputError, setInputError] = useState('');

  const [todos, setTodos] = useState<Todo[]>(() => {
    const storageTodos = localStorage.getItem('@Todo-List:todos');

    if (storageTodos) {
      return JSON.parse(storageTodos);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('@Todo-List:todos', JSON.stringify(todos));
  }, [todos]);

  async function handleAddToDo(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    if (!newToDo) {
      setInputError('Digite um título para a nova tarefa');
      return;
    }

    try {
      const todo = { title: newToDo, uuid: uuid() };

      setTodos([...todos, todo]);
      setNewToDo('');
      setInputError('');
    } catch (err) {
      setInputError('Erro ao adicionar tarefa');
    }
  }

  async function handleRemoveToDo(item: string): Promise<void> {
    try {
      const newToDos = todos.filter((todo) => {
        return todo.uuid !== item;
      });

      console.log(newToDos);

      setTodos([...newToDos]);
    } catch (err) {
      setInputError('Erro ao adicionar tarefa');
    }
  }

  return (
    <>
      <Title>To-Do List</Title>

      <Form hasError={!!inputError} onSubmit={handleAddToDo}>
        <input
          value={newToDo}
          onChange={(e) => setNewToDo(e.target.value)}
          placeholder="Digite um título para a tarefa"
        />
        <button type="submit">Add</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Show>
        {todos.map((todo) => (
          <div key={todo.uuid}>
            <strong>{todo.title}</strong>
            <Button
              onClick={(item) => handleRemoveToDo(todo.uuid)}
              type="button"
            >
              <FiTrash2 size={20} />
            </Button>
          </div>
        ))}
      </Show>
    </>
  );
};

export default Dashboard;
