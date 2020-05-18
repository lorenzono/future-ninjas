import React from 'react'
import styled from 'styled-components'
import ButtonHome from './Button'
import { Space } from '../../../style'

const ButtonsDivision = styled.div`
	display: flex;
	justify-content: center;
	background-color: black;
`

const Banner = props => (
  <>
    <ButtonsDivision>
      <ButtonHome changePage={props.changePage} page='SEARCH_PAGE' text="Contrate um profissional" image={require('../../../img/contrato-icone.png')} />
      <ButtonHome changePage={props.changePage} page='JOBS_PAGE' text="Seja um profissional" image={require('../../../img/ninja-icone.png')} />
    </ButtonsDivision>
  </>
)

export default Banner