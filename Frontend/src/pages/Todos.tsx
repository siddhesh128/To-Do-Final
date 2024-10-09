import React, { useEffect, useState, Suspense } from "react";
import { Todo } from "../interface/Todo";
import TodoService from "../services/todo.service";
import AuthService from "../services/auth.service";
import { useNavigate } from "react-router-dom";
import TaskInput from "../components/Todos/TaskInput";
import Header from "../components/Todos/TodoHeader";
import { PENDING_TASK, COMPLETED_TASK } from "../constants/labels";
import Spinner from "../components/common/Spinner/Spinner";
import {
  TasksContainer,
  TaskTitle,
  TodoContainer,
  TaskColumn,
} from "../styles/todo.style";

const TaskList = React.lazy(() => import("../components/Todos/TaskList"));

const Todos: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTask, setNewTask] = useState<string>("");
  const [editingTask, setEditingTask] = useState<Todo | null>(null);
  const [taskImage, setTaskImage] = useState<string | null>(null); 
  const [expectedTime, setExpectedTime] = useState<string>(''); 
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();
  const username = localStorage.getItem("username");

  useEffect(() => {
    TodoService.fetchTodos(setTodos);
  }, []);

  useEffect(() => {
    if (submitted) {
      if (editingTask) {
        TodoService.handleUpdateTask(
          editingTask,
          newTask,
          expectedTime,
          setTodos,
          todos,
          setNewTask,
          setEditingTask,
          taskImage 
        );
      } else {
        TodoService.handleAddTask(
          newTask,
          expectedTime,
          todos,
          setTodos,
          setNewTask,
          taskImage 
        );
      }
      setTaskImage(null);
      setSubmitted(false); 
    }
  }, [submitted, taskImage, editingTask, newTask, expectedTime, todos]);

  const handleSubmit = (todoData: { task: string; expectedTime: string; imageUrl: string | null }) => {
    setNewTask(todoData.task);
    setExpectedTime(todoData.expectedTime);
    setTaskImage(todoData.imageUrl);
    setSubmitted(true); 
  };

  const handleUserLogout = () => {
    AuthService.handleLogout(navigate);
  };

  return (
    <TodoContainer>
      <Header username={username} onLogout={handleUserLogout} />
      <TaskInput
        newTask={newTask}
        setNewTask={setNewTask}
        onSubmit={handleSubmit}
        editingTask={!!editingTask}
        setTaskImage={setTaskImage}
      />
      <TasksContainer>
        <TaskColumn>
          <TaskTitle>{PENDING_TASK}</TaskTitle>
          <Suspense fallback={<Spinner />}>
            <TaskList
              todos={todos}
              setTodos={setTodos}
              setNewTask={setNewTask}
              setEditingTask={setEditingTask}
              completed={false}
            />
          </Suspense>
        </TaskColumn>

        <TaskColumn>
          <TaskTitle>{COMPLETED_TASK}</TaskTitle>
          <Suspense fallback={<Spinner />}>
            <TaskList
              todos={todos}
              setTodos={setTodos}
              setNewTask={setNewTask}
              setEditingTask={setEditingTask}
              completed={true}
            />
          </Suspense>
        </TaskColumn>
      </TasksContainer>
    </TodoContainer>
  );
};

export default Todos;