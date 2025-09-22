import { TodoItem } from "../todoItem.jsx";

export default {
  title: "todo",
  component: TodoItem,
};

const Template = (args) => (
  <TodoItem
    task={{ title: "Bonjour", done: false }}
    setAsDone={() => {}}
    setAsTodo={() => {}}
    removeTask={() => {}}
  />
);

export const LoggedIn = Template.bind({});
LoggedIn.args = {};
