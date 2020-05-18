import React from 'react'
import styled from 'styled-components'
import Form from '../../micro/Form'
import {
  formData,
  initialState
}
  from '../../../data/'

const MainSection = styled.div`
  // padding: 0 7%;
`

const Heading = styled.h2`
  margin: 0;
  // margin-top: 0.5em;
  font-size: 22pt;
  line-height: 39px;
  font-weight: bold;
`

const SearchForm = styled.div`
  padding-top: 3vh;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  width: 20vw;
`

const NinjaPicture = styled.div`
  & > img {
    max-width: 640px;
  }
`

const Label = styled.label`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #333333;
  margin-bottom: 0.5em;
`

const StyledInput = styled.input`
  background: #EAEAEA;
  border: 1px solid #D4D4D4;
  box-sizing: border-box;
  border-radius: 6px;
  height: 2.5em;
  width: 100%;
  margin-bottom: 1em;
  text-indent: 0.5em;
  color: #959595;
`

const StyledSelect = styled.select`
  background: #EAEAEA;
  border: 1px solid #D4D4D4;
  box-sizing: border-box;
  border-radius: 6px;
  height: 2.5em;
  width: 100%;
  margin-bottom: 1em;
  color: #959595;
`

const StyledTextarea = styled.textarea`
  background: #EAEAEA;
  border: 1px solid #D4D4D4;
  box-sizing: border-box;
  border-radius: 6px;
  height: 7.2em;
  width: 100%;
  margin-bottom: 1em;
  color: #959595;
`

const SearchButton = styled.button`
  display: block;
  margin-left: 50%;
  width: 49%;
  text-align: center;
  margin-top: 1.5em;
  background: #8E6CD2;
  border-radius: 5px;
  box-shadow: none;
  border: none;
  height: 3em;
  color: white;
`


const Main = () => (
  <MainSection>
    <Heading>
      Procure o profissional perfeito para o que você precisa
    </Heading>
    <SearchForm>
      <Form formData={formData} initialState={initialState} />
    </SearchForm>
    <NinjaPicture>
      <img src={require("../../../img/icone-ninja.png")} />
    </NinjaPicture>
  </MainSection>
)

export default Main