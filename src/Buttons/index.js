import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
    tasks.length > 0 && (
        <div className="js-toggleButtonEvents">
            <button onClick={toggleHideDone} className="js-toggleButtonEvents js-hideCompletedTasksButton">
                {hideDone ? 'Show' : 'Hide'} completed tasks
            </button>
            <button
                className="js-toggleButtonEvents js-markAllTasksAsDone"
                disabled={tasks.every(({ done }) => done)}
                onClick={() => setAllDone()}
            >
                Complete all tasks
            </button>
        </div>
    )
);

export default Buttons;