import './index.css'

const TaskItem = props => {
  const {item} = props
  const {task, tag} = item

  return (
    <li className="task-c">
      <p className="task-p">{task}</p>
      <p className="task-b">{tag}</p>
    </li>
  )
}

export default TaskItem
