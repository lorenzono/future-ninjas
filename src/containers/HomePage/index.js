import React from 'react'
import HeaderComponent from '../../components/macro/Header'
import MainComponent from '../../components/macro/Main'
import SectionComponent from '../../components/macro/Section'
import FooterComponent from '../../components/macro/Footer'
import PropTypes from 'prop-types'
import {
  headerLogo,
  navItems,
  mainHeadingOne,
  mainHeadingTwo,
  mainParagraph,
  mainButtons,
  mainPicture,
  tipsSectionTitle,
  cardTips,
  title,
  socialMedias
} from '../../data'

const HomePage = props => (
  <>
    <HeaderComponent
      changePage={props.changePage}
      headerColor='white'
      navColor='primary'
      logo={headerLogo}
      navItems={navItems}
    />
    <MainComponent
      changePage={props.changePage}
      backgroundColor='secondary'
      headingOne={mainHeadingOne}
      headingTwo={mainHeadingTwo}
      paragraph={mainParagraph}
      buttons={mainButtons}
      image={mainPicture}
    />
    <SectionComponent
      color='secondary'
      title={tipsSectionTitle}
      tips={cardTips}
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

HomePage.propTypes = {
  changePage: PropTypes.func.isRequired
}

export default HomePage