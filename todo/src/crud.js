import { useState } from 'react';

export function Crud() {
  const [tasks, setTasks] = useState(['Empty lists']); // This is going to be the loading tasks component.
  function onChangeState() {
    setTasks('Changed Task');
  }

  // Return this
  return (
    <div className="tasks">
      <ul>
        <LoadTasks tasks={tasks} />
        <ChangeTask onChangeState={ChangeTask} />
      </ul>
    </div>
  );
}

// Load Items
function Tasks({ tasks }) {
  return tasks;
}
function ChangeTask({ onChangeState }) {
  return (
    <button onClick={() => onChangeState()}> CLICK ME TO UPDATE STATE</button>
  );
}
