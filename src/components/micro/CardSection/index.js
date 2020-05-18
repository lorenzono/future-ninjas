import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'
import {
  CardDivision,
  Card,
  CardPictureDiv,
  CardPicture,
  CardTitle,
  CardParagraph
} from '../../../style'

const CardSection = props => (
  <CardDivision>
    {props.tips.map(tip =>
      <Card
        key={v4()}
      >
        <CardPictureDiv>
          <CardPicture
            src={tip.src}
            alt={tip.title}
          />
        </CardPictureDiv>
        <div>
          <CardTitle color={props.color}>
            {tip.title}
          </CardTitle>
          <CardParagraph>
            {tip.paragraph}
          </CardParagraph>
        </div>
      </Card>
    )}
  </CardDivision>
)

CardSection.propTypes = {
  tips: PropTypes.array.isRequired,
  color: PropTypes.string.isRequired
}

export default CardSection