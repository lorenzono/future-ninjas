import React from 'react'
import PropTypes from 'prop-types'
import HeaderComponent from '../../components/macro/Header/index'
import MainComponent from '../../components/macro/Main'
import { navItems, headerLogo, createMainPicture, title, socialMedias, formData, initialState } from '../../data'
import FooterComponent from '../../components/macro/Footer'

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
    <MainComponent
      backgroundColor='secondary'
      headingOne={'aaaa'}
      formData={formData}
      initialState={initialState}
      image={createMainPicture}
    />
    <FooterComponent
      changePage={props.changePage}
      footerColor='white'
      navColor='primary'
      title={title}
      navItems={navItems}
      socialMedias={socialMedias}
    />
  </>
)

CreateNewJobPage.propTypes = {
  changePage: PropTypes.func.isRequired,
  currentPage: PropTypes.string.isRequired
}

export default CreateNewJobPage