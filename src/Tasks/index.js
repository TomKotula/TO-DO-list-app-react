import checkmark from './checkmark.png';
import bin from './bin.png';
import { List, ListItem, DoneButton, Content, RemoveButton } from "./styled";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
    <List>
        {tasks.map(task => (
            (hideDone && task.done) ? null : (
                <ListItem
                    key={task.id}
                >
                    <DoneButton $done={task.done} onClick={() => toggleTaskDone(task.id)} >
                        {task.done ? <img src={checkmark} className="js-checkmarkIcon" alt="checkmark" /> : null}
                    </DoneButton>
                    <Content className={`${task.done ? 'js-contentLineThrough' : ''}`}>
                        {task.content}
                    </Content>
                    <RemoveButton src={bin} alt="bin" onClick={() => removeTask(task.id)} />
                </ListItem>
            )
        ))}
    </List>
);

export default Tasks;