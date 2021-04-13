import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: "Huisarts afspraak",
        day: "Feb 8th 2:40pm",
    },
    {
        id: 2,
        text: "Meeeting op school",
        day: "Feb 8th 2:40pm",
    },
  ])

  // Delete  Task
  const deleteTask =(id) => {
    setTasks(tasks.filter((task)=>task.id !== id))
  }

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} />)
      : ('No tasks to show')}
    </div>
  );
}

export default App;
