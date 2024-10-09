import React from "react";
import {
  ListGroupStyled,
  ListItemStyled,
  CheckboxStyled,
} from "../../styles/todo.style";
import Button from "../common/Button/Button";
import TodoService from "../../services/todo.service";
import { TaskListProps } from "../../interface/Todo/index";
import { EDIT_LABEL, DELETE_LABEL } from "../../constants/labels";

const TaskList: React.FC<TaskListProps> = ({
  todos,
  setTodos,
  setNewTask,
  setEditingTask,
  completed,
}) => {
  const filteredTodos = todos.filter((todo) => todo.completed === completed);

  return (
    <ListGroupStyled>
      {filteredTodos.map((todo) => (
        <ListItemStyled key={todo.id}>
          <div>
            <CheckboxStyled
              type="checkbox"
              checked={todo.completed}
              onChange={() =>
                TodoService.handleToggleCompleted(todo.id, setTodos, todos)
              }
            />
        <span style={{ fontSize: "1.2em" }}>{todo.task}</span>
        {todo.taskImage && (
              <img
                src={todo.taskImage}
                alt="Task"
                style={{
                  width: "100%",
                  height: "60%",
                  objectFit: "contain",
                  borderRadius: "8px",
                  marginTop: "10px",
                }}
              />
            )}
          </div>
          <div>
            <Button
              buttonStyle="warning"
              width="auto"
              onClick={() =>
                TodoService.handleEditTask(todo, setEditingTask, setNewTask)
              }
            >
              {EDIT_LABEL}
            </Button>
            <Button
              buttonStyle="danger"
              width="auto"
              onClick={() =>
                TodoService.handleDeleteTask(todo.id, setTodos, todos)
              }
            >
              {DELETE_LABEL}
            </Button>
          </div>
        </ListItemStyled>
      ))}
    </ListGroupStyled>
  );
};

export default TaskList;
