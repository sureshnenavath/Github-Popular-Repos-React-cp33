// Write your code here
import './index.css'

const LanguageFilterItem = ({eachItem, handleTabClick, isActive}) => {
  const buttonClick = () => {
    handleTabClick(eachItem.id)
  }
  const activeOrNot = isActive ? 'active' : null
  return (
    <li>
      <button className={`no-active ${activeOrNot}`} onClick={buttonClick}>
        {eachItem.language}
      </button>
    </li>
  )
}
export default LanguageFilterItem
