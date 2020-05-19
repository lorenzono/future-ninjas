import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import { InputDiv, Label, Input, TextArea, HiddenCheckbox, CheckboxLabel, Button } from '../../../style'

export default class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = { form: props.initialState }
  }

  handleInputChange = e => {
    const { type, id, value } = e.target
    const prevForm = this.state.form
    switch (type) {
      case 'text':
      case 'number':
      default:
        this.setState({ form: { ...prevForm, [id]: value } })
        break
      case 'checkbox':
        this.setState({
          form: {
            ...prevForm, [value]: { ...prevForm[value], [id]: !prevForm[value][id] }
          }
        })
        break
    }
  }

  handleSubmit = async () => {
    try {
      await axios.post('https://us-central1-future-apis.cloudfunctions.net/futureNinjas/jobs', this.state.form)
      this.setState({ form: this.props.initialState })
    } catch (err) {
      alert('Verifique todos os campos.')
    }
  }

  render() {
    return (
      <>
        {this.props.formData.map(input => {
          switch (input.type) {
            case 'text':
            case 'number':
            default:
              return (
                <InputDiv key={input.key}>
                  <Label htmlFor={input.key}>
                    {input.title}
                  </Label>
                  <Input
                    id={input.key}
                    type={input.type}
                    placeholder={input.placeholder}
                    value={this.state.form[input.key] || ''}
                    onChange={this.handleInputChange}
                    autoFocus={input.autofocus}
                    min={input.min}
                    required
                  />
                </InputDiv>
              )
            case 'checkbox':
              return (
                <InputDiv key={input.key}>
                  <Label>
                    {input.title}
                  </Label>
                  {input.options.map(option =>
                    <div key={option.key}>
                      <HiddenCheckbox
                        id={option.key}
                        value={input.key}
                        type={input.type}
                        checked={this.state.form[input.key][option.key]}
                        onChange={this.handleInputChange}
                        display='inline'
                      />
                      <CheckboxLabel
                        htmlFor={option.key}
                      >
                        {option.title}
                      </CheckboxLabel>
                    </div>
                  )}
                </InputDiv>
              )
            case 'textarea':
              return (
                <InputDiv key={input.key}>
                  <Label htmlFor={input.key}>
                    {input.title}
                  </Label>
                  <TextArea
                    id={input.key}
                    type={input.type}
                    placeholder={input.placeholder}
                    value={this.state.form[input.key] || ''}
                    onChange={this.handleInputChange}
                    autoFocus={input.autofocus}
                    required
                  />
                </InputDiv>
              )
            case 'button':
              return (
                <Button
                  onClick={this.handleSubmit}
                  key='button'
                  color='white'
                  backgroundColor='primary'
                  tabIndex="0"
                  margin={1}
                >
                  {input.title}
                </Button>
              )
          }
        })}
      </>
    )
  }
}

Form.propTypes = {
  initialState: PropTypes.object.isRequired,
  formData: PropTypes.array.isRequired
}

