import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'
import { Button, ButtonImage } from '../../../style'

const Buttons = props => (
  <>
    {props.buttons.map(button =>
      <Button
        key={v4()}
        onClick={() => props.changePage(button.ref)}
        color={props.textColor}
        backgroundColor={props.buttonColor}
        tabIndex="0"
      >
        {button.title}
        <ButtonImage
          src={button.src}
          alt={button.title}
        />
      </Button>
    )}
  </>
)

Buttons.propTypes = {
  textColor: PropTypes.string.isRequired,
  buttonColor: PropTypes.string.isRequired,
  buttons: PropTypes.array.isRequired,
  changePage: PropTypes.func.isRequired
}

export default Buttons