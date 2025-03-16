// Write your code here
import './index.css'

const RepositoryItem = ({repo}) => {
  const {name, issuesCount, forksCount, starsCount, avatarUrl} = repo

  return (
    <li className="repo-card">
      <img src={avatarUrl} alt={name} className="repo-image" />
      <h1 className="repo-name">{name}</h1>
      <div className="repo-details">
        <p className="repo-info">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
            alt="stars"
            className="icon-style"
          />{' '}
          {starsCount} stars

        </p>
        <p className="repo-info">
          <img
            src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png "
            alt="forks"
            className="icon-style"
          />{' '}
          {forksCount} forks
        </p>
        <p className="repo-info">
          <img
            src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png "
            alt="open issues"
            className="icon-style"
          />{' '}
          {issuesCount} open issues
        </p>
      </div>
    </li>
  )
}

export default RepositoryItem
