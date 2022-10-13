import Typography from "@mui/material/Typography";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

import Card from "@mui/material/Card";

const TodoCard = styled(Card)({
  padding: "1rem",
  backgroundColor: "rgba(255, 255, 255, 0.15)",
  color: "darkslategray",
  height: "calc(100% - 2rem)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  "&:hover": {
    boxShadow: "0 8px 8px #0002",
  },
});

export const TodoItem = ({ task, setAsDone, setAsTodo, removeTask }) => (
  <TodoCard elevation={2} className="task" key={task.id}>
    <Typography
      className={task.done ? "done" : "task"}
      sx={{ marginBottom: "1rem" }}
    >
      {task.title}
    </Typography>
    <ButtonGroup variant="outlined">
      {!task.done ? (
        <Button variant="outlined" onClick={() => setAsDone(task.id)}>
          ✓ done
        </Button>
      ) : (
        <Button
          variant="outlined"
          color="warning"
          onClick={() => setAsTodo(task.id)}
        >
          Rouvrir
        </Button>
      )}
      <Button
        variant="outlined"
        color="error"
        onClick={() => removeTask(task.id)}
      >
        🗑️
      </Button>
    </ButtonGroup>
  </TodoCard>
);
