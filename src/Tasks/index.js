import "./style.css";
import checkmark from './checkmark.png';
import bin from './bin.png';

const Tasks = (props) => (
    <ul className="flex__list js-tasks">
        {props.tasks.map(task => (
            <li
                key={task.id}
                className="flex__listItem"
            >
                <button className="js-done">
                    {task.done ? <img src={checkmark} className="js-checkmarkIcon" alt="checkmark" /> : null}
                </button>
                <div className={`js-content ${task.done ? 'js-contentLineThrough' : ''}`}>
                    {task.content}
                </div>
                <img className="js-remove" src={bin} alt="bin"/>
            </li>
        ))}
    </ul>
);

export default Tasks;