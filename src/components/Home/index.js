import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import ButtonElement from '../ButtonItem'
import TaskItem from '../ListTaskItem'

import './index.css'

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

class Home extends Component {
  state = {list: [], task: '', tag: tagsList[0].optionId, activeId: ''}

  renderEmptyView = () => (
    <div className="not">
      <p className="not-p">No Tasks Added Yet</p>
    </div>
  )

  renderListView = () => {
    const {list} = this.state

    return (
      <ul className="list-item">
        {list.map(each => (
          <TaskItem key={each.id} item={each} />
        ))}
      </ul>
    )
  }

  onChangeTask = event => {
    this.setState({task: event.target.value})
  }

  onChangeTag = event => {
    this.setState({tag: event.target.value})
  }

  onSubmit = event => {
    event.preventDefault()

    const {task, tag} = this.state
    const newList = {
      id: uuidv4(),
      task,
      tag,
    }

    this.setState(prevState => ({
      list: [...prevState.list, newList],
      task: '',
      tag: '',
    }))
  }

  ButtonItemId = id => {
    this.setState(prev => ({
      list: prev.list.filter(each => each.tag === id),
    }))
    this.setState({activeId: id})
  }

  render() {
    const {list, task, tag, activeId} = this.state
    const le = list.length === 0

    return (
      <div className="app-container">
        <div className="add-task-container">
          <h1 className="head">Create a task</h1>
          <form className="form-container" onSubmit={this.onSubmit}>
            <label htmlFor="text" className="label">
              Task
            </label>
            <input
              className="input"
              id="text"
              type="text"
              onChange={this.onChangeTask}
              value={task}
              placeholder="Enter the task here"
            />
            <label htmlFor="select" className="label">
              Tags
            </label>
            <select
              className="input"
              name="cars"
              id="select"
              value={tag}
              onChange={this.onChangeTag}
            >
              {tagsList.map(each => (
                <option key={each.optionId} value={each.optionId}>
                  {each.displayText}
                </option>
              ))}
            </select>
            <button type="submit" className="button">
              Add Task
            </button>
          </form>
        </div>
        <div className="left-container">
          <h1 className="head-r">Tags</h1>
          <div className="button-container">
            {tagsList.map(each => (
              <ButtonElement
                key={each.optionId}
                item={each}
                ButtonItemId={this.ButtonItemId}
                isActive={each.displayText === activeId}
              />
            ))}
          </div>
          <div className="tasks-container">
            <h1 className="head-r">Tasks</h1>
            {le ? this.renderEmptyView() : this.renderListView()}
          </div>
        </div>
      </div>
    )
  }
}

export default Home
