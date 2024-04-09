import './App.css'
import TodoList from './TodoList';
import Lottery from './Lottery';
import Ticket from './Ticket';
import Lottery1 from './Lottery1';

function App() {
  return (
    <>
      <Lottery1 n={3} winningSum={15}/>
    </>
  );
}

export default App
