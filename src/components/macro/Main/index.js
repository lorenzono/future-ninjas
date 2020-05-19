import React from 'react'
import PropTypes from 'prop-types'
import Buttons from '../../micro/Buttons'
import {
  Main,
  MainDivision,
  MainSection,
  MainHeading,
  MainParagraph,
  PictureSection,
  MainPicture
} from '../../../style'
import Form from '../../micro/Form'

const MainComponent = props => (
  <Main color={props.backgroundColor}>
    <MainDivision>
      <MainSection>
        <MainHeading>
          {props.headingOne}
          {props.headingTwo &&
            <>
              <br />
              {props.headingTwo}
            </>
          }
        </MainHeading>
        {props.paragraph &&
          <MainParagraph>
            {props.paragraph}
          </MainParagraph>
        }
        <br />
        {props.buttons &&
          <Buttons
            changePage={props.changePage}
            buttonColor='primary'
            textColor='white'
            buttons={props.buttons}
          />
        }
        {props.formData &&
          <Form
            formData={props.formData}
            initialState={props.initialState}
          />
        }
      </MainSection>
      <PictureSection>
        <MainPicture
          src={props.image.src}
          alt={props.image.alt}
        />
      </PictureSection>
    </MainDivision>
  </Main>
)

MainComponent.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  headingOne: PropTypes.string.isRequired,
  headingTwo: PropTypes.string,
  paragraph: PropTypes.string,
  changePage: PropTypes.func,
  buttons: PropTypes.array,
  formData: PropTypes.array,
  initialState: PropTypes.object,
  image: PropTypes.object.isRequired
}

export default MainComponent