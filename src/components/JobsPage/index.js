import React from 'react'
import PropTypes from 'prop-types'
import HeaderComponent from '../macro/Header'
import JobsDisplay from './JobsDiplay/index'
import { headerLogo, navItems } from '../../data'

const JobsPage = props => (
  <>
    <HeaderComponent
      changePage={props.changePage}
      currentPage={props.currentPage}
      headerColor='white'
      navColor='primary'
      logo={headerLogo}
      navItems={navItems}
    />
    <JobsDisplay />
  </>
)

JobsPage.propTypes = {
  changePage: PropTypes.func.isRequired,
  currentPage: PropTypes.string.isRequired
}

export default JobsPage