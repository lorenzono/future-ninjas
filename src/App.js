import React from 'react'
import HomePage from './containers/HomePage'
import HowItWorksPage from './containers/HowItWorksPage'
import CreateNewJobPage from './containers/CreateNewJobPage'
import JobsPage from './components/JobsPage/index'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.homePage = 'HOME_PAGE'
    this.howItWorksPage = 'HOW_IT_WORKS_PAGE'
    this.createNewJobPage = 'CREATE_NEW_JOB_PAGE'
    this.jobsPage = 'SEARCH_FOR_JOBS_PAGE'
    this.state = {
      currentPage:
        <HomePage
          changePage={this.changePage}
        />
    }
  }

  changePage = page => {
    switch (page) {
      case this.homePage:
      default:
        this.setState({
          currentPage:
            <HomePage
              changePage={this.changePage}
            />
        })
        break
      case this.howItWorksPage:
        this.setState({
          currentPage:
            <HowItWorksPage
              changePage={this.changePage}
              currentPage={this.howItWorksPage}
            />
        })
        break
      case this.createNewJobPage:
        this.setState({
          currentPage:
            <CreateNewJobPage
              changePage={this.changePage}
              currentPage={this.createNewJobPage}
            />
        })
        break
      case this.jobsPage:
        this.setState({
          currentPage:
            <JobsPage
              changePage={this.changePage}
              currentPage={this.jobsPage}
            />
        })
        break
    }
  }

  render() {
    return (
      <>
        {/* Sugestão: deixar o Header e o Footer, que são comuns em todas as páginas, aqui. */}
        {this.state.currentPage}
      </>
    )
  }
}