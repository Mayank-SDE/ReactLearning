import { useContext } from 'react';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todo';
import { TodosContext } from './store/todos-context';
function App() {
  const todoContext = useContext(TodosContext);
  return (
    <div>
      <NewTodo onAddTodo={todoContext.addTodo} />
      <Todos items={todoContext.items} onRemoveTodo={todoContext.removeTodo} />
    </div>
  );
}

export default App;
