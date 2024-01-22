import "./style.css";
import checkmark from './checkmark.png';
import bin from './bin.png';

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
    <ul className="flex__list js-tasks">
        {tasks.map(task => (
            (hideDone && task.done) ? null : (
                <li
                    key={task.id}
                    className="flex__listItem"
                >
                    <button className="js-done" onClick={() => toggleTaskDone(task.id)} >
                        {task.done ? <img src={checkmark} className="js-checkmarkIcon" alt="checkmark" /> : null}
                    </button>
                    <div className={`js-content ${task.done ? 'js-contentLineThrough' : ''}`}>
                        {task.content}
                    </div>
                    <img className="js-remove" src={bin} alt="bin" onClick={() => removeTask(task.id)}/>
                </li>
            )
        ))}
    </ul>
);

export default Tasks;