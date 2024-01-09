import "./style.css";

const Buttons = (props) => (
    props.tasks.length > 0 && (
        <div className="js-toggleButtonEvents">
            <button className="js-toggleButtonEvents js-hideCompletedTasksButton">
                {props.hideDone ? 'Show' : 'Hide'} completed tasks
            </button>
            <button
                className="js-toggleButtonEvents js-markAllTasksAsDone"
                disabled={props.tasks.every(({ done }) => done)}
            >
                Complete all tasks
            </button>
        </div>
    )
);

export default Buttons;