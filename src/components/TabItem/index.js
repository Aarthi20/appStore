// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, setActiveTabId, isActive} = props
  const {tabId, displayText} = tabDetails

  const onClickTab = () => {
    setActiveTabId(tabId)
  }
  const activeBtnClassName = isActive ? `tab-btn active` : `tab-btn`

  return (
    <li className="tab-item">
      <button type="button" className={activeBtnClassName} onClick={onClickTab}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
