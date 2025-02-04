import {useState} from "react";
import {useDispatch} from "react-redux";
import {storeTask} from "./utilities/state/taskSlice.js";

const App = () => {
    const [task, setTask] = useState('');
    const dispatch = useDispatch();

    const handleInput =(event) => {
        setTask(event.target.value)
    }

    const addNewTask = () => {
        dispatch(storeTask(task))
    }

  return (
      <>
    <div>
      <label htmlFor="last_name" className="mb-2 text-sm font-medium text-dark">
        Task
      </label>
      <input
        type="text"
        id="small-input"
        name="task"
        onChange={handleInput}
        className="w-1/2 m-4 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs"
      />
      <button
        type="button"
        onclick="addNewTask"
        className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
      >
        Add New Task
      </button>
    </div>
          <div>
              {task}
          </div>
          </>
  );
};

export default App;
