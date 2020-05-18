import React from 'react'
import styled from 'styled-components'



const ButtonStyled = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	// width: 229px;
	// height: 48px;
	background-color: #8E6CD2;
	// border: none;
	color: white;
	border-radius: 200px;
	// margin: 40px 110px;
	:hover {
		background-color: #6202EE;
	}
`

const TextButton = styled.span`
	font-weight: bold;
	font-size: 14px;
`

const PictureButton = styled.img`
	width: 40px;
	height: 40px;
`



const ButtonHome = props => (

  <ButtonStyled onClick={() => props.changePage(props.currentPage)} variant="contained">
    <TextButton>{props.text}</TextButton>
    <PictureButton src={props.image} />
  </ButtonStyled>
)

export default ButtonHome