import './index.css'

const ButtonElement = props => {
  const {item, ButtonItemId, isActive} = props
  const {displayText} = item
  const className = isActive ? 'styled' : 'button-v'

  const buttonClick = () => {
    ButtonItemId(displayText)
  }

  return (
    <li className="button-item">
      <button type="button" className={className} onClick={buttonClick}>
        {displayText}
      </button>
    </li>
  )
}

export default ButtonElement
