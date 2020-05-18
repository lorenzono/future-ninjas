import React from 'react'
import PropTypes from 'prop-types'
import Main from '../../components/CreateNewJobPage/Main'
import HeaderComponent from '../../components/macro/Header/index'
import { navItems, headerLogo } from '../../data'

const CreateNewJobPage = props => (
  <>
    <HeaderComponent
      changePage={props.changePage}
      currentPage={props.currentPage}
      headerColor='white'
      navColor='primary'
      logo={headerLogo}
      navItems={navItems}
    />
    <Main />
  </>
)

CreateNewJobPage.propTypes = {
  changePage: PropTypes.func.isRequired,
  currentPage: PropTypes.string.isRequired
}

export default CreateNewJobPage