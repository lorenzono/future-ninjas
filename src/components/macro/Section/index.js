import React from 'react'
import PropTypes from 'prop-types'
import CardSection from '../../micro/CardSection/index.js'
import {
  Section,
  SectionDivision,
  SectionTitle
} from '../../../style/index.js'

const SectionComponent = props => (
  <Section>
    <SectionDivision>
      <SectionTitle color={props.color}>{props.title}</SectionTitle>
      {props.tips && <CardSection tips={props.tips} color={props.color} />}
    </SectionDivision>
  </Section>
)

SectionComponent.propTypes = {
  color: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tips: PropTypes.array
}

export default SectionComponent