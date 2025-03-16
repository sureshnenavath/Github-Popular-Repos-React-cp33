// Write your code here
import './index.css'

const RepositoryItem = ({ repo }) => {
  const { name, issuesCount, forksCount, starsCount, avatarUrl } = repo

  return (
    <li className="repo-card">
      <img src={avatarUrl} alt={name} className="repo-image" />
      <h1 className="repo-name">{name}</h1>
      <div className="repo-details">
        <p className="repo-info">⭐ {starsCount} stars</p>
        <p className="repo-info">🔗 {forksCount} forks</p>
        <p className="repo-info">❗ {issuesCount} open issues</p>
      </div>
    </li>
  )
}

export default RepositoryItem
