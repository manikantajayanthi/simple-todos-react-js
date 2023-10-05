import './index.css'

const TodoItem = props => {
  const {initialList, onClickDelete} = props
  const {title, id} = initialList
  const deleteItem = () => {
    onClickDelete(id)
  }
  return (
    <li className="list-container">
      <p className="todo">{title}</p>
      <button type="button" className="button" onClick={deleteItem}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
