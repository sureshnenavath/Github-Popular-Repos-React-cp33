import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'
import {useState, useEffect} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

const apiStatusConstrain = {
  success: 'SUCCESS',
  fail: 'FAIL',
  inProgress: 'IN_PROGRESS',
}

const githubReposApiUrl = 'https://apis.ccbp.in/popular-repos?language='

const GithubPopularRepos = () => {
  const [responseData, setResponseData] = useState([])
  const [apiStatus, setApiStatus] = useState(null)
  const [initialLanguage, setLanguage] = useState(languageFiltersData[0].id)

  const handleTabClick = returnId => {
    setLanguage(returnId)
  }

  const getData = async () => {
    setApiStatus(apiStatusConstrain.inProgress)
    const url = `${githubReposApiUrl}${initialLanguage}`
    const response = await fetch(url)
    if (response.ok) {
      const data = await response.json()

      const formattedData = data.popular_repos.map(repo => ({
        id: repo.id,
        name: repo.name,
        issuesCount: repo.issues_count,
        forksCount: repo.forks_count,
        starsCount: repo.stars_count,
        avatarUrl: repo.avatar_url,
      }))

      setResponseData(formattedData)
      setApiStatus(apiStatusConstrain.success)
    } else {
      setApiStatus(apiStatusConstrain.fail)
    }
  }

  useEffect(() => {
    getData()
  }, [initialLanguage])

  const topContainer = () => (
    <>
      <h1>Popular</h1>
      <ul className="tab-items">
        {languageFiltersData.map(eachItem => (
          <LanguageFilterItem
            key={eachItem.id}
            eachItem={eachItem}
            handleTabClick={handleTabClick}
            isActive={eachItem.id === initialLanguage}
          />
        ))}
      </ul>
    </>
  )

  const renderRepositories = () => (
    <ul className="repositories">
      {responseData.map(repo => (
        <RepositoryItem key={repo.id} repo={repo} />
      ))}
    </ul>
  )
  const renderApiStatus = () => {
    switch (apiStatus) {
      case apiStatusConstrain.success:
        return renderRepositories()
      case apiStatusConstrain.inProgress:
        return renderLoadingView()
      case apiStatusConstrain.fail:
        return renderWhenFail()
      default:
        return null
    }
  }
  const renderWhenFail = () => {
    return (
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
          alt="failure view"
        />
        <h1>Something Went Wrong</h1>
      </div>
    )
  }
  const renderLoadingView = () => (
    <div className="products-loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  return (
    <div className="main_container">
      <div className="container">
        {topContainer()}
        {renderApiStatus()}
      </div>
    </div>
  )
}

export default GithubPopularRepos
