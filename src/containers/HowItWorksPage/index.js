import React from 'react'
import PropTypes from 'prop-types'
import HeaderComponent from '../../components/macro/Header'
import {
  headerLogo,
  navItems,
  hiwMainPicture,
  socialMedias,
  title
} from '../../data'
import MainComponent from '../../components/macro/Main'
import FooterComponent from '../../components/macro/Footer'


const HowItWorksPage = props => (
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
      changePage={props.changePage}
      backgroundColor='secondary'
      headingOne='Como funciona?'
      paragraph='A'
      image={hiwMainPicture}
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

HowItWorksPage.propTypes = {
  changePage: PropTypes.func.isRequired,
  currentPage: PropTypes.string
}

export default HowItWorksPage